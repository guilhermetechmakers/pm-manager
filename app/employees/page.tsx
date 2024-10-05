import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const employees = [
  { id: 1, name: "John Doe", role: "Project Manager", team: "Development" },
  { id: 2, name: "Jane Smith", role: "Designer", team: "Design" },
  { id: 3, name: "Bob Johnson", role: "Developer", team: "Development" },
  { id: 4, name: "Alice Brown", role: "Marketing Specialist", team: "Marketing" },
]

export default function EmployeesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Employees</h1>
        <Button>
          <Link href="/employees/new">New Employee</Link>
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your employees.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${employee.name}`} />
                    <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {employee.name}
                </div>
              </TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>{employee.team}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  <Link href={`/employees/${employee.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}