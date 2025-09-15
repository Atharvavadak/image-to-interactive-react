import Header from "@/components/Header";
import { Timer, AlertTriangle, BarChart3, Target } from "lucide-react";
import featuresBg from "@/assets/features-bg.jpg";

const Features = () => {
  const features = [
    {
      icon: Timer,
      title: "REAL-TIME",
      subtitle: "REP COUNTER",
      description: "Track your reps automatically with AI-powered movement detection"
    },
    {
      icon: AlertTriangle,
      title: "POSTURE",
      subtitle: "CORRECTION ALERTS",
      description: "Get instant feedback on your form to prevent injuries"
    },
    {
      icon: BarChart3,
      title: "PROGRESS",
      subtitle: "TRACKING",
      description: "Monitor your fitness journey with detailed analytics"
    },
    {
      icon: Target,
      title: "PERSONALIZED",
      subtitle: "FEEDBACK",
      description: "Receive tailored recommendations based on your performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Features Section */}
      <section 
        className="relative min-h-screen pt-24 pb-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${featuresBg})`
        }}
      >
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              FEATURES
            </h1>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 hover:bg-card/20"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <h4 className="text-xl font-bold text-foreground">
                      {feature.subtitle}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;