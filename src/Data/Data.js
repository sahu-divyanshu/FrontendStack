import ButtonWrapperAyush from "@/ChallangeComponents/Ayush Talesara/Button";
import ButtonWrapperDivyanshu from "@/ChallangeComponents/Divyanshu Sahu/Button";
import ButtonWrapperHarshit from "@/ChallangeComponents/Harshit/Button";

export const authors = [
  {
    id: 0,
    author: "Ayush Talesara",
    img: `https://avatars.githubusercontent.com/u/106388215?v=4`,
  },
  {
    id: 1,
    author: "Divyanshu Sahu",
    img: `https://avatars.githubusercontent.com/u/107391324?v=4`,
  },
  {
    id: 2,
    author: "Harshit Sharma",
    img: `https://avatars.githubusercontent.com/u/106171546?v=4`,
  },
];
export const componentsData = [
  {
    id: 1,
    name: "Button",
    type: "Basic",
    variations: [
      {
        author: "Ayush Talesara",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
    import { cn } from "@/Utils/twMerge";
    const ButtonWrapperAyush = () => {
      return (
        <div className="flex h-full w-full items-center justify-center ">
          <Button BgColor="bg-gray-100" hoverColor={"hover:bg-gray-100/90"}>
            Button
          </Button>
        </div>
      );
    };
    const Button = ({
      BgColor = "bg-gray-100",
      hoverColor = "hover:bg-gray-100/90",
      children,
    }) => {
      return (
        <button
          type="button"
          className={cn(
        \`rounded-md px-6 py-2 transition-colors ease-in-out focus:outline focus:outline-1 focus:outline-black \`, 
        \`\${BgColor}\`\, 
        \`\${hoverColor}\`\,
          )}
        >
          {children}
        </button>
      );
    };

    export default ButtonWrapperAyush;

      `,
        renderedComponent: ButtonWrapperAyush,
      },
      {
        author: "Divyanshu Sahu",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
      import { cn } from "@/Utils/twMerge";
      const ButtonWrapperDivyanshu = () => {
        return (
          <div className="flex h-full w-full items-center justify-center ">
            <Button BgColor="bg-red-500" hoverColor={"hover:bg-red-500/90"}>
              Button
            </Button>
          </div>
        );
      };
      const Button = ({
        BgColor = "bg-gray-100",
        hoverColor = "hover:bg-gray-100/90",
        children,
      }) => {
        return (
          <button
            type="button"
            className={cn(
              \` rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black \`,
              \`\${BgColor}\`\,
              \`\${hoverColor}\`\,
           )}
          >
            {children}
          </button>
        );
      };

      export default ButtonWrapperDivyanshu;
`,
        renderedComponent: ButtonWrapperDivyanshu,
      },
      {
        author: "Harshit Sharma",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
      import { cn } from "@/Utils/twMerge";
      const ButtonWrapperHarshit = () => {
        return (
          <div className="flex h-full w-full items-center justify-center ">
            <Button BgColor="bg-blue-500" hoverColor={"hover:bg-blue-500/90"}>
              Button
            </Button>
          </div>
        );
      };
      const Button = ({
        BgColor = "bg-gray-100",
        hoverColor = "hover:bg-gray-100/90",
        children,
      }) => {
        return (
          <button
            type="button"
            className={cn(
              \`\ rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black \`\,
              \`\${BgColor}\`\,
              \`\${hoverColor}\`\,
            )}
          >
            {children}
          </button>
        );
      };

      export default ButtonWrapperHarshit;

      `,
        renderedComponent: ButtonWrapperHarshit,
      },
    ],
  },
];
