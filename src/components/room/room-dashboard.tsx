'use client';

import { useState, useEffect } from "react";
import { Plus, Link2, Briefcase, GraduationCap, Loader2 } from "lucide-react";
import { LANGUAGES } from "@/lib/execute/languages";
import { cn } from "@/lib/utils/cn";

/**
 * Visual-only clone of PairCode's RoomDashboard.
 * Matches http://localhost:3000/ markup & styling exactly,
 * but Create/Join actions are demo-only (no backend calls).
 */
export function RoomDashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [roomName, setRoomName] = useState("");
  const [joinInput, setJoinInput] = useState("");
  const [joinName, setJoinName] = useState("");
  const [error, setError] = useState("");
  const [joinError, setJoinError] = useState("");
  const [creating, setCreating] = useState(false);

  const closeModals = () => {
    setShowCreateModal(false);
    setShowJoinModal(false);
    setError("");
    setJoinError("");
  };

  // Escape closes any open modal
  useEffect(() => {
    if (!showCreateModal && !showJoinModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModals();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showCreateModal, showJoinModal]);

  const handleCreateRoom = async () => {
    if (!roomName.trim()) {
      setError("Room name is required");
      return;
    }
    // Visual-only: fake brief loading then close (no navigation)
    setError("");
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
      setRoomName("");
      setShowCreateModal(false);
    }, 600);
  };

  const handleJoinRoom = () => {
    const value = joinInput.trim();
    if (!value) {
      setJoinError("Enter a valid room link or room ID");
      return;
    }
    // Visual-only: just close the modal
    setJoinError("");
    setShowJoinModal(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* Role selection */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-foreground">How are you joining today?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <button
            onClick={() => setShowCreateModal(true)}
            className="group text-left bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="w-10 h-10 bg-accent/15 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold mb-1 text-foreground">I&apos;m the Interviewer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create a room, pick a language, and share the link with your candidate.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md font-medium text-sm transition-colors">
              <Plus className="w-4 h-4" />
              Create Interview Room
            </span>
          </button>

          <button
            onClick={() => setShowJoinModal(true)}
            className="group text-left bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="w-10 h-10 bg-accent/15 rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold mb-1 text-foreground">I&apos;m the Candidate</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Have an interview link? Paste it below to join your interview room.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md font-medium text-sm transition-colors">
              <Link2 className="w-4 h-4" />
              Join with a Link
            </span>
          </button>
        </div>
      </div>

      {/* Create Room Modal */}
      {showCreateModal && (
        <div>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeModals}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-xl p-6 w-full max-w-md border border-border shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 text-foreground">Create Interview Room</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Room Name</label>
                  <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="e.g., Frontend Interview - John"
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    maxLength={50}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleCreateRoom();
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  >
                    {LANGUAGES.map((lang) => (
                      <option key={lang.id} value={lang.name}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={closeModals}
                    disabled={creating}
                    className="flex-1 px-4 py-2 bg-muted text-foreground hover:bg-muted/80 rounded transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateRoom}
                    disabled={creating || !roomName.trim()}
                    className={cn(
                      "flex-1 px-4 py-2 rounded transition-all text-sm font-medium flex items-center justify-center gap-2",
                      creating || !roomName.trim()
                        ? "bg-muted cursor-not-allowed text-muted-foreground"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    {creating && <Loader2 className="w-4 h-4 animate-spin" />}
                    {creating ? "Creating..." : "Create Room"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Room Modal */}
      {showJoinModal && (
        <div>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeModals}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-xl p-6 w-full max-w-md border border-border shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 text-foreground">Join Interview Room</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Room Link or ID</label>
                  <input
                    type="text"
                    value={joinInput}
                    onChange={(e) => setJoinInput(e.target.value)}
                    placeholder="Paste the interview link here"
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleJoinRoom();
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Your Name</label>
                  <input
                    type="text"
                    value={joinName}
                    onChange={(e) => setJoinName(e.target.value)}
                    placeholder="e.g., Sarah Chen"
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    maxLength={30}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleJoinRoom();
                      }
                    }}
                  />
                </div>

                {joinError && (
                  <p className="text-sm text-destructive">{joinError}</p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={closeModals}
                    className="flex-1 px-4 py-2 bg-muted text-foreground hover:bg-muted/80 rounded transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleJoinRoom}
                    disabled={!joinInput.trim()}
                    className={cn(
                      "flex-1 px-4 py-2 rounded transition-all text-sm font-medium flex items-center justify-center gap-2",
                      !joinInput.trim()
                        ? "bg-muted cursor-not-allowed text-muted-foreground"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    Join Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
