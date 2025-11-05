import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1216px] px-8 lg:px-14 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <EvercamLogoWhite />
            <p className="mt-6 text-sm text-white/70 leading-5">
              The Future of Construction Visibility
            </p>
            <div className="flex items-center gap-4 mt-7">
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-normal text-white/90 mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Capture</FooterLink>
              <FooterLink href="#">AI & Copilot</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-normal text-white/90 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#">Risk Mitigation</FooterLink>
              <FooterLink href="#">Safety & Compliance</FooterLink>
              <FooterLink href="#">Productivity</FooterLink>
              <FooterLink href="#">Reporting</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-normal text-white/90 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-normal text-white/90 mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              © 2025 Evercam. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        to={href}
        className="text-sm text-white/70 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
    >
      {icon}
    </Link>
  );
}

function EvercamLogoWhite() {
  return (
    <svg
      width="128"
      height="32"
      viewBox="0 0 128 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_4_4284"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="128"
        height="30"
      >
        <path d="M128 1.91187H0V30.088H128V1.91187Z" fill="white" />
      </mask>
      <g mask="url(#mask0_4_4284)">
        <path
          d="M33.5708 22.9719V8.59741H44.2304V11.029H36.4744V14.2154H43.691V16.6361H36.4744V20.549H44.5044V22.9697H33.5708V22.9719Z"
          fill="white"
        />
        <path
          d="M50.0289 22.9719L44.8916 8.59741H48.0388L51.6775 19.2374L55.1967 8.59741H58.2765L53.1283 22.9719H50.0289Z"
          fill="white"
        />
        <path
          d="M59.1531 22.9719V8.59741H69.8127V11.029H62.0567V14.2154H69.2733V16.6361H62.0567V20.549H70.0868V22.9697H59.1531V22.9719Z"
          fill="white"
        />
        <path
          d="M71.9546 22.9719V8.59741H78.0641C79.5996 8.59741 80.7157 8.72791 81.4136 8.98456C82.11 9.24338 82.6663 9.7023 83.0865 10.3613C83.5035 11.0225 83.7144 11.7772 83.7144 12.6276C83.7144 13.7065 83.3972 14.596 82.7645 15.2986C82.1293 16.001 81.1834 16.4448 79.9216 16.6274C80.5482 16.9928 81.0675 17.3952 81.4748 17.8324C81.8838 18.2717 82.4336 19.0482 83.1275 20.1661L84.8825 22.9697H81.4112L79.3126 19.8421C78.5666 18.7241 78.0576 18.0194 77.7836 17.728C77.5095 17.4366 77.218 17.2386 76.9114 17.1299C76.6047 17.0211 76.1175 16.9668 75.4498 16.9668H74.8603V22.9675H71.9546V22.9719ZM74.8582 14.6787H77.0049C78.3969 14.6787 79.2669 14.6199 79.6127 14.5025C79.9585 14.385 80.2304 14.1828 80.4262 13.8935C80.6223 13.6064 80.7197 13.2453 80.7197 12.8147C80.7197 12.3319 80.5917 11.9404 80.3326 11.6424C80.0738 11.3444 79.7106 11.1573 79.2386 11.0791C79.0037 11.0465 78.2969 11.029 77.1202 11.029H74.856V14.6787H74.8582Z"
          fill="white"
        />
        <path
          d="M95.0427 17.6864L97.8571 18.5781C97.4264 20.1484 96.7083 21.3121 95.7037 22.0733C94.7006 22.8346 93.4262 23.2152 91.8846 23.2152C89.9743 23.2152 88.4069 22.5627 87.1776 21.2598C85.9491 19.9549 85.3333 18.1735 85.3333 15.9115C85.3333 13.5191 85.9507 11.6616 87.1864 10.3371C88.4214 9.01469 90.0467 8.35132 92.0601 8.35132C93.8175 8.35132 95.2464 8.87114 96.3453 9.91078C96.9998 10.5263 97.4892 11.4071 97.8153 12.5578L94.9421 13.245C94.7722 12.499 94.418 11.9117 93.8787 11.4789C93.3393 11.0483 92.6848 10.833 91.9128 10.833C90.8469 10.833 89.9831 11.2158 89.3198 11.9792C88.6564 12.7448 88.3239 13.9824 88.3239 15.6963C88.3239 17.5123 88.65 18.8087 89.3045 19.5786C89.9574 20.3507 90.8075 20.7357 91.854 20.7357C92.626 20.7357 93.2894 20.4899 93.844 20.0005C94.4027 19.5111 94.8012 18.739 95.0427 17.6864Z"
          fill="white"
        />
        <path
          d="M112.708 22.9719H109.55L108.295 19.7072H102.55L101.362 22.9719H98.2832L103.884 8.59741H106.953L112.708 22.9719ZM107.363 17.2864L105.382 11.9534L103.439 17.2864H107.363Z"
          fill="white"
        />
        <path
          d="M113.606 22.9719V8.59741H117.949L120.557 18.4022L123.137 8.59741H127.491V22.9719H124.794V11.6576L121.94 22.9719H119.145L116.303 11.6576V22.9719H113.606Z"
          fill="white"
        />
        <path
          d="M21.3365 11.9777C16.8778 8.73699 7.48193 1.91187 7.48193 1.91187C7.48193 1.91187 17.4673 1.91187 17.7109 1.91187C17.9545 1.91187 18.5439 2.06629 18.7744 2.55784C19.7141 4.56318 20.6688 6.56417 21.6737 8.53689C22.2392 9.74401 21.5214 11.4361 21.3365 11.9777Z"
          fill="white"
        />
        <path
          d="M13.8416 7.25945C9.38506 10.5046 0 17.3427 0 17.3427C0 17.3427 3.07326 7.84235 3.14938 7.61179C3.22333 7.38125 3.55175 6.86577 4.09115 6.79835C6.28789 6.52213 8.4868 6.23068 10.6726 5.8805C11.995 5.7152 13.3827 6.91798 13.8416 7.25945Z"
          fill="white"
        />
        <path
          d="M7.02728 13.0195C8.75203 18.2547 12.3864 29.2841 12.3864 29.2841C12.3864 29.2841 4.28462 23.4464 4.08671 23.305C3.88878 23.1637 3.50163 22.6938 3.60168 22.1588C4.01058 19.9817 4.40642 17.8023 4.74355 15.6121C4.98932 14.3028 6.56184 13.3502 7.02728 13.0195Z"
          fill="white"
        />
        <path
          d="M10.3833 21.2588C15.8969 21.2501 27.5069 21.2283 27.5069 21.2283C27.5069 21.2283 19.4399 27.1116 19.2419 27.2552C19.0441 27.3988 18.4785 27.6227 18.0023 27.3596C16.06 26.2939 14.1112 25.2389 12.1363 24.2384C10.9683 23.5947 10.5507 21.8047 10.3833 21.2588Z"
          fill="white"
        />
        <path
          d="M19.2095 20.5176C20.9234 15.278 24.5295 4.23999 24.5295 4.23999C24.5295 4.23999 27.5984 13.7425 27.6724 13.9731C27.7463 14.2036 27.7833 14.8126 27.3831 15.1845C25.7628 16.6961 24.1533 18.2186 22.585 19.7824C21.6106 20.6894 19.7815 20.5263 19.2095 20.5176Z"
          fill="white"
        />
        <path
          d="M10.8052 5.31178C9.23928 5.52276 7.67545 5.73373 5.90503 5.97081C6.34438 4.72672 6.72717 3.63705 7.15998 2.40601C8.46282 3.34777 9.66554 4.21994 10.8683 5.08994C10.8466 5.16389 10.827 5.23784 10.8052 5.31178Z"
          fill="white"
        />
        <path
          d="M3.36029 20.0942C2.2989 19.2829 1.38759 18.5826 0.352295 17.7909C1.63771 16.8578 2.84047 15.9835 4.04106 15.1091C4.10413 15.1483 4.16721 15.1852 4.23246 15.2244C3.95406 16.7795 3.67566 18.3325 3.36029 20.0942Z"
          fill="white"
        />
        <path
          d="M23.8965 4.1521C23.3962 5.68329 22.946 7.06006 22.498 8.439C22.4283 8.45423 22.3609 8.46945 22.2913 8.4825C21.5997 7.05354 20.9102 5.62674 20.1968 4.1521C21.443 4.1521 22.5806 4.1521 23.8965 4.1521Z"
          fill="white"
        />
        <path
          d="M15.9687 26.8912C14.9007 27.6155 13.9547 28.2571 12.9019 28.9705C12.4191 27.4872 11.9732 26.1126 11.5251 24.7358C11.5709 24.6858 11.6143 24.6358 11.66 24.5857C13.052 25.3339 14.4462 26.0777 15.9687 26.8912Z"
          fill="white"
        />
        <path
          d="M22.8374 20.3376C23.9706 19.2587 25.1037 18.1799 26.3739 16.9685C26.7393 18.2191 27.0591 19.3131 27.4048 20.4963C25.8258 20.4963 24.3751 20.4963 22.9244 20.4963C22.8961 20.4441 22.8657 20.3897 22.8374 20.3376Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
