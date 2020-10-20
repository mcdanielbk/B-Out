using System;

namespace B_Out.Models
{
    public class CourtDate
    {
        public int Id { get; set; }
        public DateTime When { get; set; }
        public string CaseNumber { get; set; }
        public string Charge { get; set; }
        public string CourtRoom { get; set; }
        
    }
}