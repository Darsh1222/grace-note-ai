import darsh1 from "@/assets/grad/darsh-1.jpeg";
import darsh2 from "@/assets/grad/darsh-2.jpeg";
import darsh3 from "@/assets/grad/darsh-3.jpeg";
import darsh4 from "@/assets/grad/darsh-4.jpeg";

const photos = [
  { src: darsh1, rotate: "-rotate-3", caption: "Sharp, sure, ready", sub: "The world is his runway" },
  { src: darsh2, rotate: "rotate-2", caption: "Stepping into tomorrow", sub: "Confidence in every stride" },
  { src: darsh3, rotate: "-rotate-1", caption: "Sunset in his stride", sub: "Miami nights, bright future" },
  { src: darsh4, rotate: "rotate-3", caption: "Cheers to what's next", sub: "Class of 2026" },
];

const PhotoGallery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {photos.map((p, i) => (
          <figure
            key={i}
            className={`group relative aspect-[3/4] bg-card border border-border/40 transition-transform duration-500 hover:rotate-0 hover:scale-105 ${p.rotate} hover:z-10 overflow-hidden`}
          >
            <img
              src={p.src}
              alt={p.caption}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-center">
              <p className="font-display italic text-sm md:text-base text-gradient-gold leading-tight">
                {p.caption}
              </p>
              <p className="text-[9px] md:text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">
                {p.sub}
              </p>
            </figcaption>
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors pointer-events-none" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
