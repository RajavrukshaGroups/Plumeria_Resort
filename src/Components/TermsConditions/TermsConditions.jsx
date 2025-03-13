import Terms from "../../assets/plumeriaresortimages/termsconditions.webp";

const TermsAndConditions = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[460px] relative">
        <img
          className="w-full h-full object-cover"
          src={Terms}
          alt="Terms and Conditions"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            TERMS AND CONDITIONS
          </h1>
        </div>
      </div>
      <div className="p-6 md:p-10 text-left">
        {[
          {
            title: "1. General Information",
            points: [
              "These terms and conditions apply to all guests staying at Plumeria Resort, located at Kushalnagar.",
              "By booking a reservation or checking into the resort, you agree to comply with these terms.",
            ],
          },
          {
            title: "2. Booking and Reservations",
            points: [
              "Reservations must be made in advance through our website, by phone, or through authorized travel agents.",
              "50% payment has to be made as an advance for the confirmation of booking.",
              "Room rates are subject to availability and may vary based on seasonality, occupancy, and other factors.",
              "Full payment is required at the time of check-in.",
              "Rooms are sold at various plans. Taxes are applicable and levied extra.",
              "Children below 5 years of age sharing with parents would be complimentary.",
            ],
          },
          {
            title: "3. Cancellation Policy",
            points: [
              "No refunds will be issued for no-shows or early check-out.",
            ],
          },
          {
            title: "4. Check-In and Check-Out",
            points: [
              "Check-in time is 1 PM and check-out time is 11 AM. Early check-in or late check-out is subject to availability and may incur additional charges.",
              "Guests must provide valid identification (Government ID proofs) upon check-in.",
              "All extras to be cleared at the resort before departure.",
              "It is mandatory for any non-resident Indians/Foreigners to produce their passport and valid visa at the time of arrival.",
            ],
          },
          {
            title: "5. Guest Responsibilities",
            points: [
              "Guests are responsible for the condition of the room during their stay and must report any damages or maintenance issues immediately.",
              "All resort facilities must be used responsibly. Guests must follow all resort guidelines regarding Swimming pool, play area and other recreational areas.",
              "No loud or disruptive behavior is allowed. Noise levels must be kept to a minimum to respect other guests.",
            ],
          },
          {
            title: "6. Smoking Policy",
            points: [
              "Smoking is prohibited in all indoor areas of the resort.",
            ],
          },
          {
            title: "7. Liability",
            points: [
              "The resort is not responsible for any personal injury, loss, or damage to personal property while guests are staying at the resort.",
              "Guests are encouraged to lock their rooms and keep valuables responsibly during the stay.",
            ],
          },
          {
            title: "8. Alcohol and Drugs",
            points: [
              "Guests are permitted to consume alcohol only in designated areas.",
              "Illegal drugs and substances are strictly prohibited on the resort premises. Violation may result in immediate eviction and legal action.",
            ],
          },
          {
            title: "9. Use of Resort Facilities",
            points: [
              "Guests are responsible for any damage caused to resort property, including furniture, equipment, and other amenities.",
              "The resort reserves the right to charge guests for any damages to facilities or property during their stay.",
            ],
          },
          {
            title: "10. Privacy and Data Collection",
            points: [
              "The resort collects personal information, including but not limited to name, address, contact details, and payment information, to process reservations and provide services.",
              "This information will not be shared with third parties except as required by law or as necessary for reservation processing.",
            ],
          },
          {
            title: "11. Amendments and Modifications",
            points: [
              "The resort reserves the right to modify or update these terms and conditions at any time. Guests will be notified of any significant changes.",
              "Any modifications to the terms will be posted on the resort's website, and guests are advised to review the terms periodically.",
            ],
          },
          {
            title: "12. Governing Law",
            points: [
              "These terms and conditions are governed by the laws of Karnataka, and any disputes arising will be resolved in the competent courts of that jurisdiction.",
            ],
          },
          {
            title: "13. Event and Group Bookings",
            points: [
              "Special rates and terms apply for group bookings and events. A separate contract may be required for events hosted at the resort.",
              "The resort reserves the right to cancel or adjust group bookings if event terms are not met or if the group’s behavior disrupts other guests.",
            ],
          },
          {
            title: "14. Room Availability and Upgrades",
            points: [
              "The resort makes every effort to honor room requests and preferences; however, room types are subject to availability at check-in.",
              "Upgrades to higher room categories are subject to availability and may incur additional charges.",
            ],
          },
          {
            title: "15. Third-Party Services and Vendors",
            points: [
              "The resort may offer or recommend third-party services such as transportation,excursions, or tours. The resort is not liable for any issues or disputes arising from these third-party services.",
              "All third-party services are subject to their own terms and conditions.",
            ],
          },
          {
            title: "16. Special Requests",
            points: [
              "Special requests (e.g., room preferences, dietary restrictions, early check-in, or late check-out) will be accommodated whenever possible but are not guaranteed.",
            ],
          },
          {
            title: "17. No Refunds for Unused Services",
            points: [
              "Guests will not be entitled to a refund for unused services, including but not limited to meals or other bookings made at the resort",
            ],
          },
          {
            title: "18. Personal Property",
            points: [
              "The resort is not responsible for any lost or stolen personal property. Guests are encouraged to secure valuables in room.",
              "The resort does not assume liability for damage to personal property left in the room, such as electronics, jewelry, or documents.",
            ],
          },
          {
            title: "19. Force Majeure",
            points: [
              "The resort shall not be held liable for any failure to fulfill its obligations due to circumstances beyond its control, including but not limited to natural disasters, government restrictions, civil disturbances, or strikes.",
            ],
          },
          {
            title: "20. Photography and Media Consent",
            points: [
              "Guests may be photographed or filmed during their stay for promotional purposes. By staying at the resort, guests consent to the use of these images for marketing and advertising.",
              "Guests may opt-out of media consent by notifying the front desk.",
            ],
          },
          {
            title: "21. Parking and Transportation",
            points: [
              "Free parking available.",
              "The resort is not responsible for damages or theft related to parked vehicles. Guests are encouraged to lock their vehicles and secure valuables.",
            ],
          },
          {
            title: "22. In-Room Amenities and Services",
            points: [
              "In-room amenities such as minibar and internet access are provided for the convenience of the guests. Any items removed from the minibar or damaged in the room will be charged to the guest’s account.",
              "Guests are not permitted to remove or misuse resort property (e.g., towels, bedding, or electronics).",
            ],
          },
          {
            title: "23. Hotel Management Rights",
            points: [
              "The resort reserves the right to refuse service to any guest who fails to comply with these terms and conditions or who engages in disruptive behavior.",
              "The resort may terminate a guest's stay without refund if behavior is deemed inappropriate, dangerous, or offensive to other guests or staff.",
            ],
          },
          {
            title: "24. Use of Technology and Wi-Fi",
            points: [
              "The resort provides complimentary Wi-Fi in public areas and guest rooms. However, the resort is not liable for connectivity issues or data loss.",
              "Guests may not engage in activities that disrupt the resort’s network, such as downloading large files or using illegal content.",
            ],
          },
          {
            title: "25. Indemnification",
            points: [
              "Guests agree to indemnify and hold harmless the resort, its employees, and agents from any liability, loss, or damages arising from their actions during their stay, including damages to resort property or personal injuries.",
            ],
          },
          {
            title: "26. Changes to Services and Facilities",
            points: [
              "The resort reserves the right to modify or suspend certain services and facilities for maintenance or improvement, and guests will be informed in advance when possible.",
              "The resort is not liable for any inconvenience caused by such changes.",
            ],
          },
          {
            title: "27. Swimming Pool",
            points: [
              "The swimming pool is open daily from 7 am to 9 am & from 4pm to 6 pm. These hours are subject to change based on seasonal factors or maintenance needs. Only nylon clothes are allowed in the swimming pool.",
              "Children under the age of 10 must be accompanied by an adult at all times while using the pool.",
              "At our resort, we have a strict policy that prohibits swimming after the consumption of alcohol. This rule is in place to ensure the safety and well-being of all guests.",
              "In the event of adverse weather conditions (e.g., heavy rain, thunderstorms), the pool may be closed for safety reasons until conditions improve.",
            ],
          },
          {
            title: "28. Campfire Policy",
            points: [
              "A communal campfire will be set up regularly for all guests to enjoy. This campfire is included in your stay and is available at no additional cost. Children must be supervised by an adult at all times when near the campfire.",
              "If a guest or group wishes to have a separate, private campfire, an additional fee of Rs 3000/- will apply. The private campfire will be set up at a designated area, and guests are required to make a reservation in advance to ensure availability.",
              "Campfires may be canceled or relocated due to adverse weather conditions (e.g., high winds, rain, or other safety concerns). Guests will be notified in advance if this occurs.",
            ],
          },
        ].map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="mt-6 text-2xl font-bold">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
