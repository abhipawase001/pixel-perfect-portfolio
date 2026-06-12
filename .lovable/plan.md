## Goal
Make the ramp-walk intro video fill the entire screen while keeping the face clearly visible (no head crop).

## Change
In `src/components/IntroSequence.tsx`, update the `<video>` element classes:

- Replace `object-contain object-top` with `object-cover object-top`
  - `object-cover` → video scales to fill the full viewport (no black bars, true full size)
  - `object-top` → anchors the frame to the top so the head/face is never cropped (only the lower body / sides get trimmed if needed)

Optionally add a subtle `scale-105` only if the source aspect causes visible side gaps — but `object-cover` alone should already fill completely.

## Why this works
- `object-contain` was letterboxing the video to preserve aspect, leaving empty bg space (looks "small").
- `object-cover` fills the screen; pairing it with `object-top` shifts the crop downward so the face stays at the top portion of the frame and is fully visible.

No other files change. Text timing, animations, and assets stay as they are.
