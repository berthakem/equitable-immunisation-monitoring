/// <reference types="vite/client" />

interface Window {
  botpress?: {
    open: () => void;
    close: () => void;
  };
}
