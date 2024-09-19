import { useState } from "react";
import { IArchitecture } from "./interfaces/interfaces";
import SVG from "./SVG/SVG";
import { ChevronRight, ChevronDown } from "lucide-react";

const Architecture = ({ fileTree, onClicking }: IArchitecture) => {
  const [opened, isOpened] = useState<boolean>(false);

  const spliting: string[] = fileTree.name.split(".");
  return (
    <div className="cursor-pointer">
      <span
        className="flex flex-col justify-center text-sm"
        onClick={
          fileTree.type === "file" ? () => onClicking(fileTree.name) : () => {}
        }
      >
        <span
          className="flex flex-row mb-1 ml-2 items-center"
          onClick={() => {
            isOpened((prev) => !prev);
          }}
        >
          {fileTree.type === "folder" ? (
            opened ? (
              <ChevronDown className="size-[18px]" />
            ) : (
              <ChevronRight className="size-[18px]" />
            )
          ) : null}

          {fileTree.type === "file" ? (
            spliting.length === 2 ? (
              <SVG type={spliting[1]} isFolder={false} />
            ) : (
              <SVG type={spliting[0]} isFolder={false} />
            )
          ) : opened ? (
            <SVG
              type={`${fileTree.name}_opened`}
              isFolder={true}
              opened={opened}
            />
          ) : (
            <SVG type={fileTree.name} isFolder={true} opened={opened} />
          )}

          {fileTree.name}
        </span>

        {opened && (
          <span className="ml-4 border-l-2 border-gray-500 mb-1">
            {fileTree.children &&
              fileTree.children.map((file, idx) => (
                <Architecture
                  fileTree={file}
                  key={idx}
                  onClicking={onClicking}
                />
              ))}
          </span>
        )}
      </span>
    </div>
  );
};

export default Architecture;
