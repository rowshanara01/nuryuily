import { cn } from "@/lib/utils";
import React from "react";

const AnimeJsIcon = ({
  className,
  isAnimation = true,
  reSize,
}: {
  className?: string;
  isAnimation?: boolean;
  reSize?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 48 48"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxtJREFUWEfNVz1IG2EYfjIloEKNFAxRYsB0MVNJiBa6mgwWkupghnbMD0RRUuikg66WhNohyeDQDsa5hfy4FWwiSF3i0jok1CBUsAUjxMUr7+GF+/nuLqcR+8Et9/497+/3fiYYOzMA/ACeAnABeHwjfgbgJ4DvAEoAvnSr1tQF4yMA7wG86oJXzPIJwCKAv1pyegA2ACQNGpazvwPwRk2HFoAfN2G+o31enNLzhKVIAWDBbh/ZbDZ/9cIq6fg6NYXnQ0Oq6lgR4HplXBcAx+3JAaiGfW1tDS6XC4NWK0bsdvT392NgYECB9eLiAq1WCyfNJgJ+P7gZahyVw3FbYgCKgrPZbNjd3cXExIThoDQaDYyNjWkDAN4KAKjV/sitcNzts1Eql/UjcH0dFAB8lPf59vY25ufnDXsuCOTzeZTDYWxppGDx8HBUAKBwtd1uw2w2KwCcn59jfX0dOzs7OD09ldApZaurq4jFYlheXkY6ndZzwEQAqEo+yzkJwOXlpeR3X18fgsEgisWipuJarYbx8XEFz/HxMdxut/j/CwKwCSChB9UIvVqtwufzKUSOjo7kAD4QgD0Az1gGPB4PkskknE4nhoeH+U+eFkoJpYLaLp1K8dGp1+twOBwKlfv7+5icnBT//0YAfotutQ5RzQu9SFDxhUIhZv0InSHScUYAFAVYLJXgn57Ws2WYnslkEI/HJXJMAHfpfy1U0WgUuVxOAUCSgkgkgmw2y9RDOUwkEjg4OGDS9San1+uVy/IpkBSh1gAy8V2rfZaWlpBKpZhMDHm+CCVtqJZ/YbbrAVBz4OrqChaLRS7Ot6FkEGlVv9500/KeMQMIDD+I6HQ6wUgHkFescc2KEqMFia2T1M5lRPf+ysqKXqSZdC1ANB/C4bBYjpbW18zrmGa50R2AjNM9USgUmOAY6RukjVl1IaF2fDk7C6/HA6vVqhoRKs5KpcJ7FwgEQMOGNiLxoe1pbm5O3IKdTbnrlexWOWELSTbke19KGRgkNu99LRcDWLDbRzebzRPxv//vYSIL2YM+zQQsD/o4lddQz5/n/wCmQyMZExH60gAAAABJRU5ErkJggg=="
        width={40}
        height={40}
      />
    </svg>
  );
};

export default AnimeJsIcon;
