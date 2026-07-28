import PageHeader from "@/components/PageHeader";
import WhatsUpStream from "@/components/WhatsUpStream";

export default function WhatsUpPage() {
  return (
    <>
      <PageHeader
        eyebrow="What's up"
        title="Things I build, write and show up in"
        lead="I love writing software. And whenever I see something exciting, I build a little side project to familiarise myself with the technology. This is where that ends up."
      />
      <section className="wrap">
        <WhatsUpStream />
      </section>
    </>
  );
}
