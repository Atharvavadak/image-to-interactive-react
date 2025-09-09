import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fitness-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">COUNT REPS.</span>
                <br />
                <span className="text-foreground">CORRECT POSTURE.</span>
                <br />
                <span className="text-primary">TRAIN SMARTER</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                AI-powered workout assistant for accuracy, safety and result
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroPrimary" size="lg" className="text-lg px-8 py-6">
                GET STARTED
              </Button>
              <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-6">
                WATCH DEMO
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary mb-2">AI-Powered</div>
                <div className="text-sm text-muted-foreground">Smart form analysis</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
                <div className="text-sm text-muted-foreground">Instant feedback</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary mb-2">Accurate</div>
                <div className="text-sm text-muted-foreground">Precise tracking</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Athlete training with FormFIT AI assistance"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-primary">127</div>
                <div className="text-xs text-muted-foreground">Perfect Reps</div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Form Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;