import { Avatar, AvatarFallback, AvatarImage } from "@/components/nurui/avatar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Story,
  StoryProgress,
  StoryControls,
  StorySlide,
  StoryOverlay,
} from "@/components/nurui/story";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/nurui/story-dialog";
import Image from "next/image";

const FABRIZIO_STORIES = [
  {
    title: "Champions league will begin soon",
    caption: "whos you are running for ?",
    storyImage:
      "https://images.unsplash.com/photo-1569617234470-9e9813ee1dae?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "who's your favourite player ?",
    caption: "who you think will win the champions league ?",
    storyImage:
      "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SHADCN_STORIES = [
  {
    title: "Easy vibes",
    caption: "In the System Prompts.",
    storyImage:
      "https://pbs.twimg.com/media/Gr5BeX6WwAAgGH_?format=jpg&name=large",
  },
  {
    title: "The new calendar.tsx is here",
    caption: `
      → Latest react-daypicker
      → Tailwind v3 and v4
      → Date, range & time pickers
      → Persian, Hijri & timezone support
      → 30+ examples to copy, paste, and build.
    `,
    storyImage:
      "https://pbs.twimg.com/media/GsxdzRfb0AIUBSs?format=jpg&name=large",
  },
  {
    title: "🤣🤣🤣🤣🤣",
    caption: "Me walking away after adding min-w-0 and it works.",
    storyImage:
      "https://pbs.twimg.com/media/Gsh-UBoasAM_Uin?format=jpg&name=medium",
  },
];

const NBA_STORIES = [
  {
    title: "Shai follows 38 in Game 1 with 34 tonight 🔥🔥🔥",
    caption:
      "MOST POINTS EVER by a player in his first 2 career Finals games 🚨🚨",
    storyImage:
      "https://pbs.twimg.com/media/Gs-BiiMbsAAIK9p?format=jpg&name=large",
  },
];

const StoryDemo = () => {
  return (
    <section className="p-20 w-full place-content-center">
      <div className="flex gap-4 justify-center">
        {/* ======== FABRIZIO STORIES ======== */}
        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-1/347110386_993663875383747_583934797072922306_n.jpg"
                alt="@fabrizioRomano"
              />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0">
            <VisuallyHidden asChild>
              <DialogTitle>Story</DialogTitle>
            </VisuallyHidden>
            {/* ✅ Added Description */}
            <VisuallyHidden asChild>
              <DialogDescription>
                Instagram-style story viewer
              </DialogDescription>
            </VisuallyHidden>

            <Story
              className="relative size-full"
              duration={5000}
              mediaLength={FABRIZIO_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-1/347110386_993663875383747_583934797072922306_n.jpg"
                      alt="@fabrizioRomano"
                    />
                    <AvatarFallback>FR</AvatarFallback>
                  </Avatar>
                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-blue-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {FABRIZIO_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  <Image
                    src={story.storyImage}
                    className="w-full h-auto"
                    alt={story.title}
                    fill
                    draggable={false}
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 z-10 space-y-1 text-white p-4">
                    <a
                      className="text-secondary"
                      href="https://x.com/FabrizioRomano"
                    >
                      @FabrizioRomano
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>

        {/* ======== SHADCN STORIES ======== */}
        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0 rounded-md">
            <VisuallyHidden asChild>
              <DialogTitle>Story</DialogTitle>
            </VisuallyHidden>
            <VisuallyHidden asChild>
              <DialogDescription>
                Instagram-style story viewer
              </DialogDescription>
            </VisuallyHidden>

            <Story
              className="relative size-full"
              duration={5000}
              mediaLength={SHADCN_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
                      alt="@shadcn"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-pink-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {SHADCN_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  <Image
                    src={story.storyImage}
                    className="w-full h-auto"
                    alt={story.title}
                    fill
                    draggable={false}
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 z-10 space-y-1 text-white p-4">
                    <a className="text-secondary" href="https://x.com/Shadcn">
                      @Shadcn
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>

        {/* ======== NBA STORIES ======== */}
        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1931904469446377472/mjaR8LDc_400x400.jpg"
                alt="@nba"
              />
              <AvatarFallback>NB</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0 rounded-md">
            <VisuallyHidden asChild>
              <DialogTitle>Story</DialogTitle>
            </VisuallyHidden>
            <VisuallyHidden asChild>
              <DialogDescription>
                Instagram-style story viewer
              </DialogDescription>
            </VisuallyHidden>

            <Story
              className="relative size-full"
              duration={8000}
              mediaLength={NBA_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1931904469446377472/mjaR8LDc_400x400.jpg"
                      alt="@nba"
                    />
                    <AvatarFallback>NB</AvatarFallback>
                  </Avatar>
                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-red-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {NBA_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  <Image
                    src={story.storyImage}
                    className="w-full h-auto"
                    alt={story.title}
                    fill
                    draggable={false}
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 z-10 space-y-1 text-white p-4">
                    <a className="text-secondary" href="https://x.com/nba">
                      @nba
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { StoryDemo };