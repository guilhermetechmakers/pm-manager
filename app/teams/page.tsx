import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teams = [
  { id: 1, name: "Development Team", memberCount: 8 },
  { id: 2, name: "Design Team", memberCount: 5 },
  { id: 3, name: "Marketing Team", memberCount: 4 },
  { id: 4, name: "Sales Team", memberCount: 6 },
]

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teams</h1>
        <Button>
          <Link href="/teams/new">New Team</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>{team.memberCount} members</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                <Link href={`/teams/${team.id}`}>View Team</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}