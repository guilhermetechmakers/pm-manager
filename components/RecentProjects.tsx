import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentProjects() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Website Redesign</p>
          <p className="text-sm text-muted-foreground">
            In Progress
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mobile App Development</p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="ml-auto font-medium">+$3,500.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">E-commerce Platform</p>
          <p className="text-sm text-muted-foreground">
            In Progress
          </p>
        </div>
        <div className="ml-auto font-medium">+$2,750.00</div>
      </div>
    </div>
  )
}