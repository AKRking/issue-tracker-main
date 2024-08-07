import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  interface ModalProps {
    children: React.ReactNode;
    triggerText?: string;
    title?: string;
    description?: string;
  }
  
  export default function Modal({ 
    children, 
  }: ModalProps) {
    return (
      <Dialog defaultOpen >
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    )
  }