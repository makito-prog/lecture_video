# db/seeds.rb

Course.create!([
  { title: 'Intro to Programming', description: 'Learn the basics of programming.' },
  { title: 'Advanced Ruby', description: 'Deep dive into Ruby programming.' }
])

Lecture.create!([
  { title: 'Lesson 1: What is Programming?', course_id: 1 },
  { title: 'Lesson 2: Ruby Basics', course_id: 1 },
  { title: 'Lesson 1: Ruby Metaprogramming', course_id: 2 }
])
