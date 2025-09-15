import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Camera, Activity, CheckCircle, X, Check } from "lucide-react";
import howItWorksBg from "@/assets/how-it-works-bg.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "TURN ON YOUR",
      subtitle: "CAMERA",
      number: "01"
    },
    {
      icon: Activity,
      title: "DO YOUR",
      subtitle: "WORKOUT",
      number: "02"
    },
    {
      icon: CheckCircle,
      title: "GET INSTANT",
      subtitle: "FEEDBACK",
      number: "03"
    }
  ];

  const problems = [
    { issue: "WRONG POSTURE", consequence: "INJURIES" },
    { issue: "LOSING REP COUNT", consequence: "CONFUSION" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* How It Works Section */}
      <section 
        className="relative min-h-screen pt-24 pb-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${howItWorksBg})`
        }}
      >
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              HOW IT WORKS
            </h1>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-card/20"
                >
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-primary/30 text-lg font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <h4 className="text-2xl font-bold text-foreground">
                      {step.subtitle}
                    </h4>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Value Proposition Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">
              VALUE PROPOSITION
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Problems */}
              <div className="bg-card/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8">
                <div className="space-y-6">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <X className="w-6 h-6 text-red-500" />
                        <span className="text-xl font-bold text-foreground">
                          {problem.issue}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-red-500">
                        {problem.consequence}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="bg-card/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-8">
                <div className="flex items-center space-x-4">
                  <Check className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      WITH US: SAFER + SMARTER
                    </h3>
                    <h4 className="text-2xl font-bold text-foreground">
                      WORKOUTS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              START YOUR FITNESS
              <br />
              JOURNEY NOW!!
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="text-xl px-12 py-6">
                GET STARTED
              </Button>
              
              <div className="bg-card/10 backdrop-blur-sm border border-primary/30 rounded-2xl px-8 py-4">
                <p className="text-primary font-bold text-lg">
                  DEMO VIDEO COMING
                </p>
                <p className="text-primary font-bold text-lg">
                  SOON
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;