import { info } from '@/config/info';

export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-primary/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-text-secondary font-mono">
          {info.footerText}
        </p>
      </div>
    </footer>
  );
}