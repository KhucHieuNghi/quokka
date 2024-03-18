import Link from "next/link";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";

const Menu = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>
        <Link href={"/dashboard"}>Dashboard</Link>
      </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>
        <Link href={"/groups"}>Groups</Link>
      </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>
        <Link href={"/notes"}>Notes</Link>
      </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>
        <Link href={"/profile"}>Profile</Link>
      </MenubarTrigger>
    </MenubarMenu>
  </Menubar>
);

export default Menu;
