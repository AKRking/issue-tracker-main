"use client"
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useRouter,usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

  
  interface ModalProps {
    children: React.ReactNode;
    triggerText?: string;
    title?: string;
    description?: string;
  }
  
  export default function Modal({ 
    children, 
  }: ModalProps) {
    const router = useRouter();
    const pathname = usePathname();
    return (
      <Dialog open={true}
      onOpenChange={() => {
          router.back();
      }}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
       {children}
      </DialogContent>
    </Dialog>
    )
  }