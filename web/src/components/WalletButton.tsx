"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useCallback, useMemo } from "react";

export function WalletButton() {
  const { publicKey, disconnect, connecting } = useWallet();
  const { setVisible } = useWalletModal();

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  const truncatedAddress = useMemo(() => {
    if (!base58) return null;
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
  }, [base58]);

  const handleClick = useCallback(() => {
    if (publicKey) {
      disconnect();
    } else {
      setVisible(true);
    }
  }, [publicKey, disconnect, setVisible]);

  if (connecting) {
    return (
      <button 
        className="group flex items-center gap-2 px-4 py-2" 
        disabled
      >
        <div className="w-3 h-3 border border-[var(--ink-faded)] border-t-[var(--accent)] rounded-full animate-spin" />
        <span className="text-sm text-[var(--ink-muted)] italic">connecting</span>
      </button>
    );
  }

  if (publicKey && truncatedAddress) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span className="text-sm font-medium text-[var(--ink)] font-mono">
            {truncatedAddress}
          </span>
        </div>
        <button 
          onClick={handleClick} 
          className="text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors italic"
        >
          disconnect
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={handleClick} 
      className="group relative px-5 py-2 text-sm font-medium text-[var(--ink)] transition-all"
    >
      <span className="relative z-10">Connect</span>
      <span className="absolute inset-0 rounded-full border border-[var(--ink)]/20 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/5 transition-all" />
    </button>
  );
}
