import { PhotoBand } from "@/components/media";
import { Container } from "@/components/ui";

/* A photographic breather for the sub-pages.

   The platform pages are wall-to-wall product: hero mockup, feature band,
   feature band, cards. This drops one photograph of the actual work between
   them so the page has somewhere to breathe and someone in it.

   Copy sits against the left edge, which is why every band image is composed
   with its subject to the right. On mobile the overlay stays legible because
   PhotoBand's wash is a gradient from the left rather than a centred vignette —
   the text keeps its contrast even when the crop tightens. */
export function PageBand({
  src,
  alt,
  eyebrow,
  title,
  body,
  overlay = 0.68,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  overlay?: number;
}) {
  return (
    <PhotoBand src={src} alt={alt} overlay={overlay}>
      <Container className="relative py-24 md:py-32">
        <div className="flex max-w-xl flex-col gap-5 text-ink-foreground">
          <span className="eyebrow-caps text-ink-foreground/60">{eyebrow}</span>
          <h2 className="type-h2 text-balance">{title}</h2>
          <p className="type-body text-ink-foreground/75 text-balance">{body}</p>
        </div>
      </Container>
    </PhotoBand>
  );
}
