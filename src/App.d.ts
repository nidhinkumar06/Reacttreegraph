export interface ClassProps {
    children: string[];
    className: string;
    type: string;
    circleProps: CircleProps;
    image: string;
    name: string;
    pathProps: Pathprops;
    status: string;
  }

  interface CircleProps {
    fill: string;
  }
  
  interface Pathprops {
    className: string;
  }