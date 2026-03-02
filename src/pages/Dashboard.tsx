import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Loader2, LogOut, User, FileText, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Assessment {
  id: string;
  assessment_type: string;
  overall_score: number;
  created_at: string;
  images: string[];
  analysis_result: any;
}

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loadingAssessments, setLoadingAssessments] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchAssessments();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single();
    setProfile(data);
  };

  const fetchAssessments = async () => {
    setLoadingAssessments(true);
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setAssessments(data);
    }
    setLoadingAssessments(false);
  };

  const getAssessmentTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'facial': 'Facial Assessment',
      'advanced_facial': 'Advanced Facial',
      'hair': 'Hair Analysis',
      'lesion': 'Skin Lesion'
    };
    return labels[type] || type;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500/10 text-green-500 border-green-500/20';
    if (score >= 6) return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    return 'bg-red-500/10 text-red-500 border-red-500/20';
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Assessments Dashboard | CosmeDocs AI</title>
        <meta name="description" content="View and manage your facial, hair and skin lesion assessment history. Track your aesthetic journey with CosmeDocs AI tools." />
        <link rel="canonical" href="https://ai.cosmedocs.com/dashboard/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">CosmeDocs Assessment</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{profile?.full_name || user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Your Assessment History</h2>
              <p className="text-muted-foreground">
                View and manage your facial, hair, and skin analysis results
              </p>
            </div>

            {loadingAssessments ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : assessments.length === 0 ? (
              <Card className="border-border/50">
                <CardContent className="py-12 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No assessments yet</h3>
                  <p className="text-muted-foreground">
                    Your assessment results will appear here once completed
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {assessments.map((assessment) => (
                  <motion.div
                    key={assessment.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">
                            {getAssessmentTypeLabel(assessment.assessment_type)}
                          </CardTitle>
                          {assessment.overall_score && (
                            <Badge className={getScoreColor(assessment.overall_score)}>
                              {assessment.overall_score}/10
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(assessment.created_at), 'PPP')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {assessment.images && assessment.images.length > 0 && (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {assessment.images.slice(0, 2).map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`Assessment ${idx + 1}`}
                                className="w-full h-24 object-cover rounded-md"
                              />
                            ))}
                          </div>
                        )}
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
