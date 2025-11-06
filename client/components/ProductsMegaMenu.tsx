import { Link } from "react-router-dom";
import { Video, Plane, Maximize, Film, Eye, PlayCircle, Calendar, Clock, Folder, Layers, Box, Monitor, Users, MessageSquare, BarChart3, Zap, Cloud, Shield, Cpu, Search } from "lucide-react";

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
  isHighlight?: boolean;
}

function MenuItem({ icon, title, description, href, isNew, isHighlight }: MenuItemProps) {
  return (
    <Link
      to={href}
      className={`group flex items-start gap-3 p-3 rounded-lg transition-colors ${
        isHighlight 
          ? 'bg-[#C4161C]/5 border border-[#C4161C]/20 hover:bg-[#C4161C]/10' 
          : 'hover:bg-slate-50'
      }`}
    >
      <div className="w-5 h-5 mt-0.5 text-[#C4161C]/70 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-sm font-normal text-slate-900">{title}</h3>
          {isNew && (
            <span className="px-1.5 py-0.5 text-[10px] font-normal bg-[#C4161C] text-white rounded">
              NEW
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 leading-snug">{description}</p>
      </div>
    </Link>
  );
}

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-semibold text-slate-900 mb-1">{title}</h2>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}

export default function ProductsMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full mt-2 z-50">
      <div className="mx-auto max-w-[1216px] px-8">
        <div className="bg-white rounded-xl border border-slate-900/10 shadow-2xl overflow-hidden">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {/* Column 1: Capture Technologies */}
            <Section 
              title="Capture Technologies" 
              subtitle="Hardware & data input methods"
            >
              <MenuItem
                icon={<Video className="w-5 h-5" />}
                title="Cameras"
                description="Fixed, 180°, PTZ, ANPR cameras"
                href="#"
              />
              <MenuItem
                icon={<Plane className="w-5 h-5" />}
                title="Drone Capture"
                description="Aerial site documentation"
                href="#"
              />
              <MenuItem
                icon={<Maximize className="w-5 h-5" />}
                title="360° Scans"
                description="Immersive site walkthrough"
                href="#"
              />
            </Section>

            {/* Column 2: Platform Features */}
            <Section 
              title="Platform Features" 
              subtitle="Tools & collaboration workspace"
            >
              <MenuItem
                icon={<Film className="w-5 h-5" />}
                title="Time-Lapse"
                description="Automated construction progress videos"
                href="#"
              />
              <MenuItem
                icon={<Video className="w-5 h-5" />}
                title="Live View"
                description="Real-time site streaming"
                href="#"
              />
              <MenuItem
                icon={<PlayCircle className="w-5 h-5" />}
                title="Recordings"
                description="Access past footage"
                href="#"
              />
              <MenuItem
                icon={<Calendar className="w-5 h-5" />}
                title="Timeline"
                description="Visual project history"
                href="#"
              />
              <MenuItem
                icon={<Clock className="w-5 h-5" />}
                title="Planner"
                description="Project scheduling & planning"
                href="#"
              />
            </Section>

            {/* Column 3: Additional Features */}
            <div className="flex flex-col gap-1">
              <MenuItem
                icon={<Folder className="w-5 h-5" />}
                title="Media Library"
                description="Photos, videos & comments"
                href="#"
              />
              <MenuItem
                icon={<Layers className="w-5 h-5" />}
                title="Compare"
                description="BIM vs reality overlay"
                href="#"
              />
              <MenuItem
                icon={<Box className="w-5 h-5" />}
                title="BIM Integration"
                description="Design model overlay"
                href="#"
              />
              <MenuItem
                icon={<Monitor className="w-5 h-5" />}
                title="Video Wall"
                description="Multi-camera dashboard"
                href="#"
              />
              <MenuItem
                icon={<Users className="w-5 h-5" />}
                title="Access Management"
                description="Permissions & visibility settings"
                href="#"
              />
              <MenuItem
                icon={<MessageSquare className="w-5 h-5" />}
                title="Team Communication"
                description="Annotations, tags & observations"
                href="#"
              />
            </div>

            {/* Column 4: AI & Intelligence */}
            <Section 
              title="AI & Intelligence" 
              subtitle="Smart insights and automation"
            >
              <MenuItem
                icon={<BarChart3 className="w-5 h-5" />}
                title="Gate Reporting"
                description="Automated traffic analytics"
                href="#"
              />
              <MenuItem
                icon={<Zap className="w-5 h-5" />}
                title="Automations"
                description="Workflow automation"
                href="#"
              />
              <MenuItem
                icon={<Cloud className="w-5 h-5" />}
                title="Weather Impact"
                description="Environmental analysis"
                href="#"
              />
              <MenuItem
                icon={<Shield className="w-5 h-5" />}
                title="PPE Compliance"
                description="Safety monitoring"
                href="#"
              />
              <MenuItem
                icon={<Cpu className="w-5 h-5" />}
                title="Copilot"
                description="AI-powered assistant"
                href="#"
                isNew
                isHighlight
              />
              <MenuItem
                icon={<Search className="w-5 h-5" />}
                title="Smart Search"
                description="AI-powered visual search"
                href="#"
                isNew
                isHighlight
              />
            </Section>
          </div>

          {/* Footer CTA */}
          <div className="border-t border-slate-900/10 bg-slate-50/50 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-900 mb-0.5">Ready to see more?</p>
                <p className="text-xs text-slate-500">Schedule a personalized demo</p>
              </div>
              <Link
                to="#"
                className="px-3 py-1.5 text-sm font-medium text-[#C4161C] border border-[#C4161C] rounded-md hover:bg-[#C4161C]/5 transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
