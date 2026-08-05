'use client';

import { Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Guendoude Oussama. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/oguenfoude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:oguenfoude@gmail.com"
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://wa.me/213776863561"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
