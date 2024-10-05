"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetailPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock project data (replace with actual data fetching)
  const project = {
    id,
    name: "Website Redesign",
    description: "Redesign the company website to improve user experience and conversion rates.",
    status: "In Progress",
    dueDate: "2023-12-31",
    tasks: [
      { id: 1, name: "Design mockups", status: "Completed" },
      { id: 2, name: "Develop frontend", status: "In Progress" },
      { id: 3, name: "Integrate backend", status: "Not Started" },
    ],
    team: [
      { id: 1, name: "John Doe", role: "Project Manager" },
      { id: 2, name: "Jane Smith", role: "Designer" },
      { id: 3, name: "Bob Johnson", role: "Developer" },
    ]
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Button>Edit Project</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Status:</strong> {project.status}</p>
              <p><strong>Due Date:</strong> {project.dueDate}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.tasks.map(task => (
                  <li key={task.id} className="flex justify-between items-center">
                    <span>{task.name}</span>
                    <span className="text-sm text-muted-foreground">{task.status}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.team.map(member => (
                  <li key={member.id} className="flex justify-between items-center">
                    <span>{member.name}</span>
                    <span className="text-sm text-muted-foreground">{member.role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}