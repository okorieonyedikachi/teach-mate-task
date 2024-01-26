import { CheckCheck, CircleDashed, LayersIcon, LayoutList, LucideIcon } from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface taskCardTypes  {
title: string;
icon: LucideIcon
}
export const taskCard:taskCardTypes[] = [
    {title: "To Do", icon: LayoutList},
    {title:"OnGoing", icon: CircleDashed},
    {title:"Completed", icon: CheckCheck}
]