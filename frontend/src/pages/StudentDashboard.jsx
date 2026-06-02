import { useAuth } from '../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Find a Mentor</h2>
          <p>Browse available mentors and request mentorship</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">Browse Mentors</button>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">My Requests</h2>
          <p>Track your mentorship requests</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">View Requests</button>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Upcoming Sessions</h2>
          <p>View your scheduled mentoring sessions</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">View Sessions</button>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Messages</h2>
          <p>Chat with your mentors</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">Open Inbox</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;