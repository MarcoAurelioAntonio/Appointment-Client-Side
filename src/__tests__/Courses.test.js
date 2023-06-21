import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Courses from '../components/Courses';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for <Courses /> component', () => {

  const coursesList = [{
    "id": 9,
    "name": "Nelson asdadsasdasdads",
    "description": "dsadasdasdasdasdasdadsasdasdasdasddas",
    "start_date": "2023-06-21",
    "end_date": "2023-06-24",
    "price": "20.0",
    "course_type": "asdads",
    "image_url": "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b4fee963a3f0b6b5be716592d385e19264fa88ca/Screenshot%202023-06-20%20at%2012.44.39%20PM.png"
  },
  {
    "id": 10,
    "name": "THis is new from zoom",
    "description": "This is a test from the last meeting",
    "start_date": "2023-06-22",
    "end_date": "2023-06-28",
    "price": "45.0",
    "course_type": "Biology",
    "image_url": "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e03ef93d475cce1f32c6ec7858b45fb6bcd17fb5/Simulator%20Screenshot%20-%20iPhone%2014%20Pro%20Max%20-%202023-06-16%20at%2018.28.01.png"
  },
  {
    "id": 11,
    "name": "Last test",
    "description": "This is a description asdadsasd",
    "start_date": "2023-06-22",
    "end_date": "2023-06-30",
    "price": "45.0",
    "course_type": "Computing",
    "image_url": "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--232f32bad1eac6bebb8856b40864e32215de0447/Screenshot%202023-06-20%20at%2012.44.39%20PM.png"
  }];

  it('In the home screen should be displayed 3 courses', () => {
    render(
      <BrowserRouter>
        <Courses courses={coursesList} />,
      </BrowserRouter>
    );
    const element = screen.getByTestId('courses-item');
    expect(element.children.length).toBe(3);
  })
  it('Should match the snapshot', () => {
    expect(renderer.create(<BrowserRouter><Courses courses={coursesList} /></BrowserRouter>,).toJSON()).toMatchSnapshot();
  });
});
