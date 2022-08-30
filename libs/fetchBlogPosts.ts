export const fetchAllPosts = async () => {
  const res = await fetch('http://localhost:3001/articles');
  return res.json();
};
