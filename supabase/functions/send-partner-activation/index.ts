
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PartnerActivationRequest {
  fellowName: string;
  fellowId: string;
  pageUrl: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fellowName, fellowId, pageUrl, timestamp }: PartnerActivationRequest = await req.json();

    // Format the timestamp for better readability
    const formattedDate = new Date(timestamp).toLocaleString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/London'
    });

    const emailResponse = await resend.emails.send({
      from: "CosmeDocs Partnership <partnerships@cosmedocs.com>",
      to: ["admin@cosmedocs.com"],
      subject: `New CosmeDoc Activated: ${fellowName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #0f172a 0%, #334155 100%); padding: 30px; border-radius: 16px; margin-bottom: 20px;">
            <h1 style="color: #22d3ee; margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">
              🎉 New CosmeDocs Partner Activated!
            </h1>
            <p style="color: #e2e8f0; margin: 0; font-size: 18px;">
              A Fellowship graduate has just activated their partner profile
            </p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #334155; margin: 0 0 20px 0; font-size: 24px; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
              Activation Details
            </h2>
            
            <div style="margin-bottom: 25px;">
              <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #475569;">Fellow Name:</strong>
                <span style="color: #334155;">${fellowName}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #475569;">Fellow ID:</strong>
                <span style="color: #334155;">${fellowId}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <strong style="color: #475569;">Activation Date:</strong>
                <span style="color: #334155;">${formattedDate}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 12px 0;">
                <strong style="color: #475569;">Page URL:</strong>
                <a href="${pageUrl}" style="color: #0ea5e9; text-decoration: none;">${pageUrl}</a>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #22d3ee20 0%, #a855f720 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155; margin: 0 0 10px 0; font-size: 18px;">Next Steps:</h3>
              <ul style="color: #475569; margin: 10px 0; padding-left: 20px;">
                <li>Contact ${fellowName} to confirm partnership details</li>
                <li>Set up their dedicated profile page</li>
                <li>Begin microsite development</li>
                <li>Add to national marketing campaigns</li>
                <li>Provide access to branded materials</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${fellowName.toLowerCase().replace(/\s+/g, '.')}@cosmedocs.com" 
                 style="background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Contact ${fellowName}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
            <p>CosmeDocs Partnership Team</p>
            <p>10 Harley Street, London W1G 9PF</p>
          </div>
        </div>
      `,
    });

    console.log("Partner activation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-partner-activation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
