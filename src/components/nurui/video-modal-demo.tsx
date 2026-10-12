import { VideoModal } from "@/components/nurui/video-modal";

const VideoModalDemo = () => {
  return (
    <section className="relative max-w-5xl mx-[1.1rem] md:mx-[1.3rem] lg:mx-[1.5rem] xl:mx-auto py-14">
      <VideoModal
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/p83vl3zE-AU?si=dWQsgqrI4apbeo1L"
        thumbnailSrc="/og-image.png"
        thumbnailAlt="Hero Video"
      />
      <VideoModal
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/p83vl3zE-AU?si=dWQsgqrI4apbeo1L"
        thumbnailSrc="/og-image.png"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
};

export default VideoModalDemo;
