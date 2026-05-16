'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Plus } from 'lucide-react';

export function Test() {
  const cardRef = useRef<HTMLDivElement>(null);
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const tagsElement = tagsRef.current;
    const cursorElement = customCursorRef.current;

    if (!tagsElement || !cursorElement) return;

    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      gsap.to(cursorElement, {
        x: cursorX - 15,
        y: cursorY - 15,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      setShowCustomCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCustomCursor(false);
    };

    tagsElement.addEventListener('mouseenter', handleMouseEnter);
    tagsElement.addEventListener('mouseleave', handleMouseLeave);
    tagsElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      tagsElement.removeEventListener('mouseenter', handleMouseEnter);
      tagsElement.removeEventListener('mouseleave', handleMouseLeave);
      tagsElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseLeave = () => {
    if (!cardRef.current || !pixelGridRef.current) return;

    const gridSize = 4;
    const pixelSize = 100 / gridSize;

    pixelGridRef.current.innerHTML = '';

    const totalPixels = gridSize * gridSize;
    const clearIndices = new Set<number>();
    while (clearIndices.size < 3) {
      clearIndices.add(Math.floor(Math.random() * totalPixels));
    }

    let pixelIndex = 0;
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (clearIndices.has(pixelIndex)) {
          pixelIndex++;
          continue;
        }

        const pixel = document.createElement('div');
        const isIndigo = Math.random() < 0.5;

        const normalizedPosition =
          (col + (gridSize - 1 - row)) / ((gridSize - 1) * 2);
        const targetOpacity = 0.5 + normalizedPosition * 0.5;

        pixel.className = `absolute ${isIndigo ? 'bg-indigo-600' : 'bg-black'}`;
        pixel.style.width = `${pixelSize}%`;
        pixel.style.height = `${pixelSize}%`;
        pixel.style.left = `${col * pixelSize}%`;
        pixel.style.top = `${row * pixelSize}%`;
        pixel.style.opacity = '0';
        pixel.style.display = 'block';
        pixel.setAttribute('data-target-opacity', targetOpacity.toString());
        pixelGridRef.current.appendChild(pixel);

        pixelIndex++;
      }
    }

    const pixels = Array.from(pixelGridRef.current.children);
    const animationStepDuration = 0.45;
    const actualPixelCount = pixels.length;
    const staggerDuration = animationStepDuration / actualPixelCount;

    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      scale: 0.995,
      duration: 0.2,
      ease: 'power2.in',
    });

    tl.to(
      pixels,
      {
        opacity: (index, target) => {
          const el = target as HTMLElement;
          return el.getAttribute('data-target-opacity') || '1';
        },
        duration: 0.45,
        ease: 'power2.in',
        stagger: {
          each: staggerDuration,
          from: 'random',
        },
      },
      '<',
    );

    tl.to(
      pixels,
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      },
      `+=${animationStepDuration}`,
    );

    tl.to(
      cardRef.current,
      {
        scale: 1,
        duration: 0.3,
        ease: 'power2.in',
      },
      '<',
    );

    tl.set(pixels, {
      display: 'none',
    });
  };

  return (
    <section className="bg-zinc-950 p-[1.5%]">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <mask id="heroMask" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="black" />
            <path
              d="M0 0.1474 V0.9863 C0 0.9938 0.0038 0.9996 0.0085 0.9996 H0.9912 C0.9958 0.9996 1 0.9863 1 0.9863 V0.0581 C1 0.0506 0.9958 0.0444 0.9912 0.0444 H0.9255 C0.9208 0.0444 0.9165 0.0383 0.9165 0.0307 V0.0149 C0.9165 0.0074 0.9132 0.0013 0.9084 0.0013 L0.2060 0.0000 C0.2012 -0.0000 0.1975 0.0061 0.1975 0.0137 V0.0312 C0.1975 0.0387 0.1936 0.0448 0.1889 0.0448 H0.0915 C0.0868 0.0448 0.0830 0.0510 0.0830 0.0585 V0.1201 C0.0830 0.1276 0.0792 0.1337 0.0745 0.1337 H0.0085 C0.0038 0.1337 0 0.1399 0 0.1474 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      <div className="relative isolate min-h-[calc(100svh-3vh)] w-full sm:min-h-[calc(100svh-3vh)]">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            mask: 'url(#heroMask)',
            WebkitMask: 'url(#heroMask)',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liquid-metal-video_yX6NvjdW-6bLYorR3Ihmlwjivg3pjA978qrSKRU.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 via-transparent to-zinc-950/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/45 via-zinc-950/15 to-transparent" />
            <div className="absolute inset-0 [background:radial-gradient(90%_60%_at_10%_70%,rgba(0,0,0,.55)_0%,transparent_70%)]" />
          </div>
        </div>

        <div className="absolute top-[5%] left-[1.5%] z-20">
          <Image
            src="/webrenew-icon-xl.png"
            alt="WebRenew Logo"
            width={100}
            height={100}
            className="h-auto w-[5%] object-contain"
          />
        </div>

        <div
          ref={tagsRef}
          className="absolute top-[0.75%] left-1/2 z-20 -translate-x-1/2 cursor-none pb-10"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="font-normal text-white">Made with</span>
            <button className="rounded-full border border-white bg-transparent px-3 py-1 text-xs font-bold text-white">
              Midjourney
            </button>
            <Plus className="h-3 w-3 stroke-[2.5] text-white" />
            <button className="rounded-full border border-white bg-transparent px-3 py-1 text-xs font-bold text-white">
              v0
            </button>
            <span className="font-normal text-white">by</span>
            <button className="rounded-full border border-white bg-transparent px-3 py-1 text-xs font-bold text-white">
              Webrenew
            </button>
          </div>
        </div>

        <div
          ref={customCursorRef}
          className={`pointer-events-none fixed z-50 h-[30px] w-[30px] rounded-full bg-indigo-600 transition-opacity duration-200 ${
            showCustomCursor ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: 0, top: 0 }}
        />

        <div className="absolute top-[0.75%] right-[0.85%] z-20">
          <Link
            href="#demo"
            className="rounded-full bg-indigo-600 px-4 py-2 font-mono text-sm font-light tracking-[-0.01em] text-white uppercase shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            PROMPT
          </Link>
        </div>
      </div>
    </section>
  );
}
