import {
  ArrowRight,
  Camera,
  Plane,
  Maximize,
  CheckCircle2,
  Clock,
  Eye,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[944px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/50 z-10" />
        <div className="absolute inset-0 bg-slate-700" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-[768px] px-6 md:px-8 text-center py-20 md:py-0">
          <p className="text-base md:text-xl text-white/90 mb-4">
            Construction Reality Capture & Intelligence
          </p>
          <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight md:leading-[90px] mb-6 md:mb-8">
            <div className="text-[64px]">Complete Visibility.</div>
            <br className="inline" />
            <div className="text-[64px]">Built for Construction.</div>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed md:leading-[39px] mb-8 md:mb-12">
            Fixed cameras, drone, and 360 capture to increase safety and
            productivity on your job sites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#C4161C] hover:bg-[#C4161C]/90 text-white h-14 px-4 text-lg font-medium rounded-md"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white bg-transparent h-14 px-5 text-lg font-medium rounded-md hover:bg-white/10"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M3.33325 3.3333C3.33318 3.0987 3.39502 2.86823 3.51251 2.66516C3.63 2.4621 3.79899 2.29363 4.00242 2.17677C4.20585 2.0599 4.43651 1.99878 4.67111 1.99958C4.90572 2.00038 5.13596 2.06306 5.33859 2.1813L13.3366 6.84663C13.5384 6.96375 13.706 7.1318 13.8225 7.33397C13.9391 7.53614 14.0005 7.76537 14.0007 7.99873C14.0009 8.23209 13.9399 8.46141 13.8237 8.66379C13.7075 8.86616 13.5402 9.0345 13.3386 9.15197L5.33859 13.8186C5.13596 13.9369 4.90572 13.9996 4.67111 14.0004C4.43651 14.0012 4.20585 13.94 4.00242 13.8232C3.79899 13.7063 3.63 13.5378 3.51251 13.3348C3.39502 13.1317 3.33318 12.9012 3.33325 12.6666V3.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Explore AI Features
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-[72px] left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white/50 items-start justify-center pt-3">
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </div>
      </section>

      {/* Capture Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1216px] px-6 md:px-8 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-4">
              Limitless Reality Capture
            </h2>
            <div className="w-16 h-1 bg-[#C4161C] mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-500">
              Three products, one platform, one unbeatable price.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Camera className="w-10 h-10 text-slate-900" />}
              title="Fixed Cameras"
              description="24/7 Site monitoring with Live view, recordings and time-lapse."
            />
            <FeatureCard
              icon={<Plane className="w-10 h-10 text-slate-900" />}
              title="Drone Capture"
              description="Aerial perspectives for comprehensive site overview and progress tracking."
            />
            <FeatureCard
              icon={<Maximize className="w-10 h-10 text-slate-900" />}
              title="360° Scans"
              description="Immersive site documentation for every corner of your construction project."
            />
          </div>
        </div>
      </section>

      {/* Camera Detail Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1216px] px-6 md:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4161C]/10 mb-6">
                <Camera className="w-4 h-4 text-[#C4161C]" />
                <span className="text-sm text-[#C4161C]">Fixed Cameras</span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-16 md:h-24 bg-[#C4161C]" />
                <h2 className="text-3xl md:text-5xl font-normal text-slate-900 leading-tight md:leading-[48px]">
                  24/7 Automated Site Monitoring
                </h2>
              </div>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed md:leading-[32.5px] mb-8 md:mb-10">
                Never miss a moment with our professional-grade construction
                cameras. Capture every phase of your project automatically with
                time-lapse videos, live streaming, and comprehensive historical
                documentation.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                <Feature text="4K high-resolution capture" />
                <Feature text="Automated time-lapse generation" />
                <Feature text="Live streaming capability" />
                <Feature text="Weather-resistant hardware" />
                <Feature text="Cloud-based storage" />
                <Feature text="Mobile app access" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-10 md:mb-12">
                <Button className="bg-[#C4161C] hover:bg-[#C4161C]/90 text-white text-sm font-medium">
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className="border-[#C4161C] text-[#C4161C] hover:bg-[#C4161C]/10 text-sm font-medium"
                >
                  See Pricing
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-slate-900/10">
                <Stat icon={<Clock />} value="24/7" label="Monitoring" />
                <Stat icon={<Eye />} value="4K" label="Resolution" />
                <Stat icon={<Bell />} value="Real-time" label="Alerts" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-12 lg:mt-0">
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl relative overflow-hidden">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Camera className="w-24 h-24" />
                </div>
              </div>

              {/* Camera Type Cards */}
              <div className="hidden md:flex absolute -top-6 left-1/2 -translate-x-1/2 items-center gap-3">
                <CameraTypeCard label="Fixed" />
                <CameraTypeCard label="180" />
                <CameraTypeCard label="PTZ" />
                <CameraTypeCard label="ANPR" />
              </div>

              {/* Stats Card */}
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-slate-900/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C4161C]/10 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-[#C4161C]" />
                  </div>
                  <div>
                    <div className="text-2xl font-normal text-slate-900">
                      10,000+
                    </div>
                    <div className="text-sm text-slate-500">
                      Cameras deployed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-slate-900/10 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-normal text-slate-900 text-center mb-4">
        {title}
      </h3>
      <p className="text-base text-slate-500 text-center mb-6">{description}</p>
      <div className="text-center">
        <a href="#" className="text-sm text-[#C4161C] hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-[#C4161C]/10 flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="w-3 h-3 text-[#C4161C]" />
      </div>
      <span className="text-base text-slate-900">{text}</span>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div className="text-[#C4161C]">{icon}</div>
        <div className="text-2xl font-normal text-[#C4161C]">{value}</div>
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

function CameraTypeCard({ label }: { label: string }) {
  return (
    <div className="w-[98px] h-[98px] rounded-xl border border-slate-900/10 bg-white shadow-xl relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-lg bg-slate-100" />
      </div>
      <div className="absolute inset-0 bg-white/95 rounded-xl flex items-center justify-center">
        <span className="text-sm text-slate-500">{label}</span>
      </div>
    </div>
  );
}
