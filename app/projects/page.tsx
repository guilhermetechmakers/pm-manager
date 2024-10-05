import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { supabase } from '@/lib/supabase'

async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
  
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  
  return data
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Link href="/projects/new">New Project</Link>
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{project.due_date}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  <Link href={`/projects/${project.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}