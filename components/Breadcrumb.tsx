import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-brown transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
        </div>
      ))}
    </nav>
  );
}
