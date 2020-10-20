using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using B_Out.Models;

namespace B_Out.Controllers
{
    // All of these routes will be at the base URL:     /api/CourtDates
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case CourtDatesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class CourtDatesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public CourtDatesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/CourtDates
        //
        // Returns a list of all your CourtDates
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourtDate>>> GetCourtDates()
        {
            // Uses the database context in `_context` to request all of the CourtDates, sort
            // them by row id and return them as a JSON array.
            return await _context.CourtDates.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/CourtDates/5
        //
        // Fetches and returns a specific courtDate by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<CourtDate>> GetCourtDate(int id)
        {
            // Find the courtDate in the database using `FindAsync` to look it up by id
            var courtDate = await _context.CourtDates.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (courtDate == null)
            {
                // Return a `404` response to the client indicating we could not find a courtDate with this id
                return NotFound();
            }

            //  Return the courtDate as a JSON object.
            return courtDate;
        }

        // PUT: api/CourtDates/5
        //
        // Update an individual courtDate with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a CourtDate
        // variable named courtDate. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our CourtDate POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourtDate(int id, CourtDate courtDate)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != courtDate.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in courtDate to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from courtDate
            _context.Entry(courtDate).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!CourtDateExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(courtDate)
            //
            return NoContent();
        }

        // POST: api/CourtDates
        //
        // Creates a new courtDate in the database.
        //
        // The `body` of the request is parsed and then made available to us as a CourtDate
        // variable named courtDate. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our CourtDate POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<CourtDate>> PostCourtDate(CourtDate courtDate)
        {
            // Indicate to the database context we want to add this new record
            _context.CourtDates.Add(courtDate);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetCourtDate", new { id = courtDate.Id }, courtDate);
        }

        // DELETE: api/CourtDates/5
        //
        // Deletes an individual courtDate with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourtDate(int id)
        {
            // Find this courtDate by looking for the specific id
            var courtDate = await _context.CourtDates.FindAsync(id);
            if (courtDate == null)
            {
                // There wasn't a courtDate with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.CourtDates.Remove(courtDate);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(courtDate)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing courtDate by the supplied id
        private bool CourtDateExists(int id)
        {
            return _context.CourtDates.Any(courtDate => courtDate.Id == id);
        }
    }
}
