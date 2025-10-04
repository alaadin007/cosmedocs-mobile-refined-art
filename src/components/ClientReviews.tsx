import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface Review {
  text: string;
  name?: string;
}

interface ClientReviewsProps {
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    text: "I've had three facial areas treated with Anti-Wrinkle Injection at Cosmedocs in recent years, and find the treatment swift, thorough and effective. Also, Dr Haq's pleasant and friendly manner makes the treatment as painless as possible!"
  },
  {
    text: "I had a facial aesthetic treatment with Cosmedocs. I found the price very reasonable. Even better the results were excellent. I will definitely use this service again."
  }
];

const ClientReviews = ({ reviews = defaultReviews }: ClientReviewsProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Reviews
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <p className="text-foreground/80 leading-relaxed mb-4">
                {review.text}
              </p>
              {review.name && (
                <p className="font-semibold text-primary">— {review.name}</p>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/testimonials" 
            className="text-primary hover:text-primary/80 underline font-medium transition-colors"
          >
            Read more reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
