'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const stats = [
  {
    title: 'Total Properties',
    value: '68',
    change: '+12%',
    positive: true,
    icon: Building2,
  },
  {
    title: 'Active Users',
    value: '2,847',
    change: '+8%',
    positive: true,
    icon: Users,
  },
  {
    title: 'New Inquiries',
    value: '156',
    change: '+23%',
    positive: true,
    icon: MessageSquare,
  },
  {
    title: 'Revenue',
    value: '$1.2M',
    change: '-3%',
    positive: false,
    icon: DollarSign,
  },
];

const recentInquiries = [
  {
    id: 1,
    name: 'James Chen',
    email: 'james@example.com',
    property: 'Oceanfront Villa Paradise',
    date: '2 hours ago',
    status: 'new',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    property: 'Modern Penthouse Suite',
    date: '5 hours ago',
    status: 'contacted',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@example.com',
    property: 'Tropical Garden Estate',
    date: '1 day ago',
    status: 'closed',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    property: 'Beachfront Luxury Apartment',
    date: '1 day ago',
    status: 'new',
  },
];

const topProperties = [
  { name: 'Oceanfront Villa Paradise', views: 1243, inquiries: 24 },
  { name: 'Modern Penthouse Suite', views: 987, inquiries: 18 },
  { name: 'Tropical Garden Estate', views: 756, inquiries: 12 },
  { name: 'Hillside Contemporary Villa', views: 654, inquiries: 9 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your real estate business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.positive ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Revenue chart placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-accent" />
              Top Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProperties.map((property, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium truncate max-w-[200px]">
                      {property.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{property.views} views</span>
                    <span>{property.inquiries} inquiries</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Inquiries */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentInquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {inquiry.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{inquiry.name}</p>
                        <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {inquiry.property}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{inquiry.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        inquiry.status === 'new'
                          ? 'default'
                          : inquiry.status === 'contacted'
                          ? 'secondary'
                          : 'outline'
                      }
                      className={
                        inquiry.status === 'new'
                          ? 'bg-accent text-accent-foreground'
                          : ''
                      }
                    >
                      {inquiry.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
