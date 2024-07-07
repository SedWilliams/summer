import '../styles/Featured.css';
import '../styles/globals.css';

export default function Featured() {

    return (
        <div className="featured">
            <h2 className="section-heading" id="featured-heading">Featured Events</h2>
            <div className="featured-events">
                <div className="featured-event">
                    <h3>Event 1</h3>
                    <p>Event 1 description goes here</p>
                </div>
                <div className="featured-event">
                    <h3>Event 2</h3>
                    <p>Event 2 description goes here</p>
                </div>
                <div className="featured-event">
                    <h3>Event 3</h3>
                    <p>Event 3 description goes here</p>
                </div> 
                <div className="featured-event">
                    <h3>Event 2</h3>
                    <p>Event 2 description goes here</p>
                </div>
                <div className="featured-event">
                    <h3>Event 3</h3>
                    <p>Event 3 description goes here</p>
                </div> 
                <div className="featured-event">
                    <h3>Open Slot</h3>
                    <p>Get your event sponsored!!</p>
                </div> 
                <div className="featured-event">
                    <h3>Open Slot</h3>
                    <p>Get your event sponsored!!</p>
                </div>
            </div>
        </div>
    );
}
