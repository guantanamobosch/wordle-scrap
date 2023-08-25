export default function Home() {
  return (
    <>
    <div>Wordle Scrap</div>
    <div>
      Join a room.
      <form>
        <label htmlFor="hname">Host name</label>
      <input type="text" id="hname" name="hname" value="Host Name"></input>
      <input type="text" value="Room Name"></input>
      <input type="text" value="Your Name"></input>
      <input type="text" value="Password"></input>
      <input type="submit" value="Submit"></input>
      </form>
    </div>
    <div>Create a room.</div>
    </>
  )
}