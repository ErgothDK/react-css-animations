import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { opacity: 0, y: 300 },
          shown: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="shown"
        exit="hidden"
        transition={{ duration: 0.3 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
