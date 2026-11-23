# Image source and licence record

## Client-supplied original photographs

The Home/Hero, About, Public Service and Gallery sections now use original photographs supplied directly by the client. Files were inspected in place; portrait choices were checked by comparing detected faces against the previously verified official portraits. Filenames were not changed, and `src/data/site.ts` references the existing files in `public/images/` with URL-encoded paths. No AI-generated portraits, downloaded replacements or photographs of other political personalities were used.

| Section | File | Dimensions | Notes |
| --- | --- | --- | --- |
| Home / Hero | `public/images/WhatsApp Image 2026-11-23 at 10.36.22 AM.jpeg` | 1080×710 | Single clear portrait; face distance 0.465 to verified reference. |
| About | `public/images/WhatsApp Image 2026-11-23 at 10.36.20 AM (2).jpeg` | 960×911 | Two-person photograph; matching face distance 0.492. |
| Public Service, Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.20 AM (1).jpeg` | 1080×591 | Public gathering; matching face distance 0.424. |
| Public Service, Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.22 AM (2).jpeg` | 1280×720 | Group/event photograph; matching face distance 0.490. |
| Public Service, Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.23 AM (1).jpeg` | 1600×900 | Community event photograph. |
| Public Service, Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.21 AM.jpeg` | 1080×1410 | Community gathering photograph. |
| Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.21 AM (2).jpeg` | 1600×1200 | Local community setting. |
| Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.23 AM.jpeg` | 1280×720 | Community outreach activity. |
| Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.20 AM.jpeg` | 1250×563 | Public meeting setting. |
| Gallery | `public/images/WhatsApp Image 2026-11-23 at 10.36.21 AM (1).jpeg` | 1080×612 | Community activity. |

Two client files were intentionally not integrated: `WhatsApp Image 2026-11-23 at 10.36.22 AM (1).jpeg` (its only detected face did not match the verified references) and `WhatsApp Image 2026-11-23 at 10.36.23 AM (2).jpeg` (494×343, below the quality of the other originals). The old portraits in `public/images/leader/` remain on disk but are no longer referenced by Home or About. Leadership Journey is a text-only timeline with no image slot, so it was left unchanged.

## Illustrative images still present (News only)

The files below remain in the repository with their original licence records. Only the four `news/` images are still rendered; the other WebP files are no longer used by Home, About, Public Service or Gallery. These are generic illustrations, not photographs of Sumant Kishore Singh and not evidence of any event, project or activity. They were sourced from Wikimedia Commons because the licence and author are recorded there.

| # | File | Commons file | Author | Licence | Source |
| --- | --- | --- | --- | --- | --- |
| 1 | `public/images/gallery/public-gathering.webp` | Audience , Punjabi language Poets' Meet on occasion of Republic Day (India) 2020 04.jpg | Harvinder Chandigarh | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Audience_,_Punjabi_language_Poets%27_Meet_on_occasion_of_Republic_Day_(India)_2020_04.jpg) |
| 2 | `public/images/gallery/community-meeting.webp` | Wikimedians having meetup with their community at WCI 2023.jpg | Nokib Sarkar | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Wikimedians_having_meetup_with_their_community_at_WCI_2023.jpg) |
| 3 | `public/images/gallery/village-gathering.webp` | A holi gathering in village.jpg | Mishra12krati | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:A_holi_gathering_in_village.jpg) |
| 4 | `public/images/gallery/community-stall.webp` | Volunteers of Wikipedia Kolkata Community - Bengali Wikipedia Stall at Greater Behala Book Fair (Brihattara Behala Boimela) 2015 @ Behala Blind School Ground - Kolkata 2015-12-8 2723.JPG | Sukanta Pal | CC BY 4.0 ([licence](https://creativecommons.org/licenses/by/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Volunteers_of_Wikipedia_Kolkata_Community_-_Bengali_Wikipedia_Stall_at_Greater_Behala_Book_Fair_(Brihattara_Behala_Boimela)_2015_@_Behala_Blind_School_Ground_-_Kolkata_2015-12-8_2723.JPG) |
| 5 | `public/images/gallery/rural-health-education.webp` | Tripura Medical College interns imparting health education to rural people 001.jpg | Anna Frodesiak | CC BY-SA 3.0 ([licence](https://creativecommons.org/licenses/by-sa/3.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Tripura_Medical_College_interns_imparting_health_education_to_rural_people_001.jpg) |
| 6 | `public/images/gallery/public-discussion.webp` | Audience - Panel Discussion - Conversation With The Wikimedia Foundation Board Of Trustees - WikiConference India 2026 - Kochi 2026-09-06 04913.jpg | Gangulybiswarup | CC BY 4.0 ([licence](https://creativecommons.org/licenses/by/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Audience_-_Panel_Discussion_-_Conversation_With_The_Wikimedia_Foundation_Board_Of_Trustees_-_WikiConference_India_2026_-_Kochi_2026-09-06_04913.jpg) |
| 7 | `public/images/gallery/community-service.webp` | Volunteers helping at the Golden Temple langar, Sikhism in India.jpg | Ken Wieland from Philadelphia, USA | CC BY-SA 2.0 ([licence](https://creativecommons.org/licenses/by-sa/2.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Volunteers_helping_at_the_Golden_Temple_langar,_Sikhism_in_India.jpg) |
| 8 | `public/images/gallery/tree-planting.webp` | Women planting a tree, Umaria district, MP, India.jpg | Yann (talk) | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Women_planting_a_tree,_Umaria_district,_MP,_India.jpg) |
| 9 | `public/images/community/rural-road.webp` | Rural Roads in Manthani Andhra Pradesh India 2012.jpg | ShashiBellamkonda | CC BY 2.0 ([licence](https://creativecommons.org/licenses/by/2.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Rural_Roads_in_Manthani_Andhra_Pradesh_India_2012.jpg) |
| 10 | `public/images/community/medical-camp.webp` | Medical camp at Kantadih Purulia by Voice Of World and other 20201218 113026 01.jpg | Sumita Roy Dutta | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Medical_camp_at_Kantadih_Purulia_by_Voice_Of_World_and_other_20201218_113026_01.jpg) |
| 11 | `public/images/community/gram-panchayat-office.webp` | Gram Panchayat Office, Lohangi - panoramio.jpg | Kailash Mohankar | CC BY 3.0 ([licence](https://creativecommons.org/licenses/by/3.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Gram_Panchayat_Office,_Lohangi_-_panoramio.jpg) |
| 12 | `public/images/community/rural-women.webp` | India - Faces - Rural women driving their own change 1 (2229752965).jpg | McKay Savage from London, UK | CC BY 2.0 ([licence](https://creativecommons.org/licenses/by/2.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:India_-_Faces_-_Rural_women_driving_their_own_change_1_(2229752965).jpg) |
| 13 | `public/images/news/rural-health-outreach.webp` | Tripura Medical College interns imparting health education to rural people 002.jpg | Anna Frodesiak | CC BY-SA 3.0 ([licence](https://creativecommons.org/licenses/by-sa/3.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Tripura_Medical_College_interns_imparting_health_education_to_rural_people_002.jpg) |
| 14 | `public/images/news/public-event-audience.webp` | Audience in AAC.jpg | Government of Odisha | CC BY 4.0 ([licence](https://creativecommons.org/licenses/by/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Audience_in_AAC.jpg) |
| 15 | `public/images/news/local-office.webp` | Gram Panchayat Office, Deogarh - panoramio.jpg | Kailash Mohankar | CC BY 3.0 ([licence](https://creativecommons.org/licenses/by/3.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Gram_Panchayat_Office,_Deogarh_-_panoramio.jpg) |
| 16 | `public/images/news/community-kitchen.webp` | Free community kitchen, daana volunteer run daily dining hall Annapurna Hindu temple Mudbidri Karnataka India.jpg | Ms Sarah Welch | CC BY-SA 4.0 ([licence](https://creativecommons.org/licenses/by-sa/4.0/)) | [Commons file page](https://commons.wikimedia.org/wiki/File:Free_community_kitchen,_daana_volunteer_run_daily_dining_hall_Annapurna_Hindu_temple_Mudbidri_Karnataka_India.jpg) |

CC BY and CC BY-SA images require attribution; CC BY-SA also requires share-alike for adaptations. The public credits file is served at `/IMAGE_CREDITS.txt` and linked from the site footer.

## Still required

- Photographs that genuinely correspond to any published news item, if the News placeholders are replaced in future.
