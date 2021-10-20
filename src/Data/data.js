const services = [
  {
    id: 1,
    title: "Daily Home Care",
    description:
      "We send a doctor to visit the patient at home to diagnose and treat the illnesses. He or she may also periodically review the home health care needs. Advances in cancer treatment and changes in health care systems have led to shorter hospital stays. Still, cancer patients often require specialized health care assistance as they undergo chemotherapy, radiation, and surgery. Family & Nursing Care’s home care services provide temporary and ongoing care so that your loved one remains safe and comfortable at home. Sometimes patients want to be cared for at home so they can be in familiar surroundings with family and friends. Home care services can help patients stay at home by using a team approach with doctors, nurses, social workers, physical therapists, and others. The benefits of home care to clients with cancer is not new. In a 1989 study McCorkle carried out a randomized clinical trial to determine the effects of home nursing care versus usual office care for 166 patients with progressive lung cancer. Although there were no differences in pain, significant differences in symptom distress, enforced social dependency, and health perceptions were reported. These results suggest that home care assists patients with preventing unnecessary distress from symptoms and maintaining their independence longer.",
    thumbnail: "https://i.ibb.co/RcC7q2d/1.jpg",
    price: 29,
  },
  {
    id: 2,
    title: "Hourly Home Care",
    description:
      "Through consultation with the doctor, a registered nurse will set up a plan and conduct it accordingly. A stroke can be an extremely challenging medical event to cope with and recover from; patients must simultaneously overcome physical, cognitive and emotional challenges and many stroke survivors report frustrations with the recovery process. In-home services can help ensure a successful recovery at home to maximize long-term independent .Caring for someone with a stroke is challenging. Behavior, memory, communication, and physical capabilities can all be impacted by stroke. When a loved one is first hospitalized immediately after a stroke, families usually step in to help supply information about the patient’s history and symptoms, check on treatments, convey patient care preferences, and generally serve as the connection between the hospital staff and the patient. You suddenly become the patient’s voice and chief advocate. As treatment progresses, you, as primary caregiver, also might be involved in choosing a rehabilitation (rehab) facility, coordinating home care services, providing transportation, housekeeping, and cooking, and communicating with physicians and rehab staff. As time goes on and continuing deficits persist, you also may be dealing with the patient’s depression, physical care needs, coordinating home care and occupational, speech, or physical therapy, facilitating communication if there is speech impairment, and providing mental",
    thumbnail: "https://i.ibb.co/vsMxr2v/2.jpg",
    price: 13,
  },
  {
    id: 3,
    title: "Specialized Care",
    description:
      `This provides patients with help on relearning how to perform daily duties or improve their speech. There is nothing bitter about old age. At NOBLE CARE RETIREMENT Homes , you will find that old age is a joyous journey, one that can be filled with fun activities, laughter, companionship, personal freedom, pampering and most importantly, family-time.NOBLE CARE is a trusted name in health care and retired folks community care.
      
      As professionals with over two decades of experience in this industry, we have developed an innovative model of resort-like living for the retired and elderly community, moving steps ahead of assisted living,disease management, 24-hour nursing care and emergency care services.
      
      We are striving hard to change the concept of old folks home in Asia to a retirement and wellness resort home. Set in a sprawling area, close to one hectare, Noble Care has revolutionized the concept of retirement homes, creating lifestyle resort living with healthcare facilities that will keep you happy, healthy and dignified in your golden years.
      Sitting atop of hill of  Kuala Lumpur South, the resort boasts a tree house, gym facilities, zen gardens and a tranquil rooftop terrace that offers you a bird’s eye view of the bustling city scape.`,
    thumbnail: "https://i.ibb.co/QHVvFwr/3.jpg",
    price: 49,
  },
  {
    id: 4,
    title: "Advanced Care",
    description:
      "At Noble Care Malaysia we offer Respite take care of folks that might need a brief or temporary keep in one in every of our care homes or who might need short term care to get over Associate in Nursing unhealthiness or operation.There are different kinds of Respite care accessible reckoning on your care desires and also the length of keep will vary from many days to many weeks or months.Our workers are given on-going opportunities for learning and development to make sure that the care they offer isn’t solely the kindest potential, however is additionally delivered from a sound, skilled cognitive content.Residents receive skilled care delivered with thoughtfulness and respect, in a very friendly, homely and appurtenant setting, wherever quality of life is dominant.",
    thumbnail: "https://i.ibb.co/sP5LfXF/4.jpg",
    price: 69,
  },
  {
    id: 5,
    title: "Telecare",
    description:
      "This provides patients with help on relearning how to perform daily duties or improve their speech.",
    thumbnail: "https://i.ibb.co/mcgfNwP/5.jpg",
    price: 12,
  },
  {
    id: 6,
    title: "DEMENTIA CARE",
    description:
      "Caregivers referred by Noble Care have specific experience and training for working with clients who have Alzheimer’s and other dementias. Private Dementia Care Services for older adults allows the family respite and time to plan for future needs, as well as provides much-needed support for the individual affected. For a person who is diagnosed with the early-stages of a memory loss disease, Dementia Care Services provide emotional and daily support. Having a hobby or joining a social group has been shown to exercise certain brain functions and slow the progression of disease symptoms. Caregivers referred by Family Nursing Care give your loved one individual attention based on his/her needs and interests.",
    thumbnail: "https://i.ibb.co/GvN7wKZ/6.jpg",
    price: 25,
  },
  {
    id: 7,
    title: "HOME NURSING",
    description:
      `Noble Care Malaysia is a welfare and humanity services organization to help the deserving members of our society. Our various well-equipped model centers work and provide holistic care and quality services to old and ailing community members. Noble Care is specialized in providing Home Nursing sphere in which Noble Nurses provide multidimensional Home Care to patients of all ages. Our Noble Home Nurses create the care plan to achieve goals based on the client’s diagnosis, including preventive, therapeutic, and rehabilitative actions. Noble Care Home Nurses provides holistic care and quality services to those having difficulty coping with daily activities and chores
      
      Noble Home Nursing team comprises experienced people and has the warmth and compassion to care for and support those who are needy, vulnerable, or ill. They are trained enough to give respect, quality treatment, and support our elderly. Our Trained staff work systematically, efficiently, and effectively and is responsible for promoting health and disease prevention, medication administration, educating patients on their current diagnosis, providing emotional support, and providing primary care such as personal hygiene.`,
    thumbnail: "https://i.ibb.co/qW1P0rs/7.jpg",
    price: 23,
  },
  {
    id: 8,
    title: "HANDICAPPED CARE",
    description:
      "People that are profound to be with intellectual, as well as multiple disabilities, are considered to the most disabled people in our community.These disabilities make them unable to fit in the layouts of the society structure that means their intelligence quotient has been estimated to be under 20 and they have several limited understanding. Adults with handicapped have greater difficulty communicating; they typically have limited understanding in addition to they usually express themselves through the use of nonverbal communication or jesters that make their communication more easily to understand by the caretaker or the representative of adult that is having disability issues they often show limited evidence of intention.",
    thumbnail: "https://i.ibb.co/LJVPDzm/8.jpg",
    price: 19,
  },
  {
    id: 9,
    title: "SENIOR CITIZENS CARE",
    description:
      `Taking care of an elderly family member is not easy. It might need caring oversight twenty-four hours a day, seven days a week. It is particularly important when their health is failing or they live with age related conditions like dementia or Alzheimer’s disease. If their young family members have a daily job, they cannot provide proper care for their elders. Medical care and senior community living care services are expensive. Not even middle-class families can afford high quality services. However, everyone wants the best for their elderly parents: a nice, safe environment where someone cares for them. Our aim is to support elderly people, in particular, those who live with disabilities or diseases. They need special services. They need an experienced staff of health care providers and nurses. We have already established twenty model senior care centers in all over Malaysia. And our plan is to make one hundred new centers altogether.
      
      We offer a wide range of services  for aging people: our old folks can live independently if they are in good health and they are active. We also provide assisted living options for those who need a bit of help with their everyday activities. We provide specialized 24/7 care services for those who are bedridden or affected by dementia and Alzheimer’s disease.
      
      We have experienced nurses who know how to deal with these patients. Our staff members are polite, empathic and caring. They help your parents /elderly family member with their nursing needs, they provide bathing services, linen service, laundry services, medicine management, housekeeping service, apartment maintenance, grooming service and everything that an aging person might need.`,
    thumbnail: "https://i.ibb.co/ZxdrT4q/9.jpg",
    price: 39,
  },
];
