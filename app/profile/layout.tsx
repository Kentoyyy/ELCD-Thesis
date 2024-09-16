
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EarlyEdge - Profile',
  icons: {
    icon: '/images/elcdfav.png', // path to your favicon
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children} {/* Renders the profile page content */}
    </div>
  );
}
