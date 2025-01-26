'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [textArea, setTextArea] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form is submitted", name, email, textArea);

    setName('');
    setEmail('');
    setTextArea('');
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-4xl tracking-tight font-bold my-8 text-center">Contact Us</h1>
      <form 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto border border-white/50 py-6 px-4"
        onSubmit={handleSubmit}  
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Your Name" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Your Email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Your Message" 
            rows={5} 
            required
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)} 
          />
        </div>
        <div className="md:col-span-2 text-center">
          <Button type="submit" className='px-8 py-6 bg-indigo-600 hover:bg-indigo-800 text-lg'>Send Message</Button>
        </div>
      </form>
    </div>
  )
}

export default Contact
