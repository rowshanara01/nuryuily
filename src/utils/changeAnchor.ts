interface IProps {  
  anchor: string;
  classes: {
    readonly [key: string]: string;
  };
}

export const changeAnchor = ({ anchor, classes }: IProps): string => {
  switch (anchor) {
    case "left":
      return classes.left;
    case "right":
      return classes.right;
    default:
      return classes.left;
  }
};
