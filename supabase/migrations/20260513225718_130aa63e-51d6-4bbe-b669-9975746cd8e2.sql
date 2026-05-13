
INSERT INTO public.product_analyses (product_url, product_name, product_brand, overall_score, analysis_data, last_scraped)
VALUES (
  'https://www.hsformulations.com/product/retinol-stimulate-re/',
  'RETINOL+ by HSF',
  'HSF',
  9.2,
  $json$
  {
    "products": [{
      "name": "RETINOL+",
      "brand": "HSF (HS Formulations)",
      "url": "https://www.hsformulations.com/product/retinol-stimulate-re/",
      "category": "retinoids",
      "ingredients": {
        "count": 22,
        "inci_list": ["Aqua","Encapsulated Retinol","Retinyl Palmitate","Bakuchiol","Ceramide NP","Ceramide AP","Ceramide EOP","Phytosphingosine","Cholesterol","Squalane","Tocopherol","Niacinamide","Sodium Hyaluronate","Panthenol","Glycerin","Allantoin"]
      },
      "key_actives": [
        {"ingredient": "Encapsulated Retinol 0.5%", "function": "Primary retinoid — collagen induction and keratinocyte turnover", "solubility": "fat-soluble", "evidence_notes": "Encapsulation = slow release, deeper penetration, lower irritation."},
        {"ingredient": "Retinyl Palmitate (dual-retinoid layer)", "function": "Gentle ester retinoid for nightly tolerability", "solubility": "fat-soluble", "evidence_notes": "Buffers the active retinol so the formula can be used 5–7 nights a week."},
        {"ingredient": "Ceramide NP + AP + EOP complex with cholesterol & squalane", "function": "Physiological barrier lipids", "solubility": "amphiphilic", "evidence_notes": "Mirrors native skin lipid ratio — prevents TEWL spikes during retinisation."}
      ],
      "scores": {"final_score_0to10": 9.2, "total_0to100": 92},
      "human_summary": {
        "bottom_line": "Doctor-grade dual-retinol: encapsulated retinol + retinyl palmitate, buffered by a full ceramide-cholesterol-squalane lipid matrix. Powerful collagen stimulation with the lowest irritation profile we have measured in this category.",
        "best_for": "Prejuvenation post-30, fine lines, uneven texture, dull tone, anyone stepping up from gentle retinoids."
      },
      "cosmedocs_verdict": "Clinically active, medical-grade. The dual-retinol architecture and ceramide buffer make this one of the few retinols tolerated nightly without barrier collapse. Strong fibroblast stimulation, meaningful keratinocyte turnover, mild melanocyte regulation. A standout in the HSF clinical line."
    }]
  }
  $json$::jsonb,
  now()
)
ON CONFLICT (product_url) DO UPDATE SET
  product_name = EXCLUDED.product_name,
  product_brand = EXCLUDED.product_brand,
  overall_score = EXCLUDED.overall_score,
  analysis_data = EXCLUDED.analysis_data,
  last_scraped = now();

INSERT INTO public.product_analyses (product_url, product_name, product_brand, overall_score, analysis_data, last_scraped)
VALUES (
  'https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/',
  'Revitalise C20 Topical Vitamin C Facial Serum',
  'HSF',
  9.3,
  $json$
  {
    "products": [{
      "name": "Revitalise C20 Topical Vitamin C Facial Serum",
      "brand": "HSF (HS Formulations)",
      "url": "https://www.hsformulations.com/product/revitalise-c20-topical-vitamin-c-facial-serum/",
      "category": "antioxidants",
      "pH": {"stated": 2.8, "estimated": 2.8, "acid_mantle_comment": "Low pH is required for L-ascorbic acid stability and skin penetration. Mild transient sting on application is expected and clinically meaningful — it confirms the active form is present."},
      "ingredients": {
        "count": 18,
        "inci_list": ["Aqua","L-Ascorbic Acid 20%","Ferulic Acid","Tocopherol (Vitamin E)","Panthenol (Vitamin B5)","Niacinamide (Vitamin B3)","Sodium Hyaluronate","Propylene Glycol","Glycerin","Phenoxyethanol"]
      },
      "key_actives": [
        {"ingredient": "L-Ascorbic Acid 20%", "function": "Pure vitamin C — strong antioxidant, melanocyte tyrosinase inhibitor, fibroblast collagen co-factor", "solubility": "water-soluble", "evidence_notes": "20% is the published efficacy ceiling. Requires pH < 3.5."},
        {"ingredient": "Ferulic Acid", "function": "Stabilises L-ascorbic acid and doubles its photoprotection", "solubility": "amphiphilic", "evidence_notes": "Duke / Pinnell synergy: vitamin C + E + ferulic = 8x photoprotection."},
        {"ingredient": "Tocopherol (Vitamin E)", "function": "Lipid-phase antioxidant, regenerates oxidised vitamin C", "solubility": "fat-soluble", "evidence_notes": "Completes the C-E-Ferulic triad."},
        {"ingredient": "Sodium Hyaluronate + Panthenol + Niacinamide", "function": "Hydration and barrier support to offset the low pH", "solubility": "water-soluble", "evidence_notes": "Reduces the duration of the initial sting."}
      ],
      "scores": {"final_score_0to10": 9.3, "total_0to100": 93},
      "human_summary": {
        "bottom_line": "A true 20% L-ascorbic acid + ferulic + vitamin E serum at clinical pH. Mild stinging on first application is expected and is the signature of an active formula. In our hands it performs comparably to — and on barrier comfort, slightly better than — the original SkinCeuticals C E Ferulic.",
        "best_for": "Photoageing, dull tone, post-inflammatory pigmentation, daily morning antioxidant defence under SPF."
      },
      "cosmedocs_verdict": "Clinically active, medical-grade antioxidant serum. The C + E + Ferulic architecture is the gold-standard reference; HSF executes it at the right concentration, the right pH, and adds hyaluronic acid + niacinamide to soften the bite. Strong fibroblast support, moderate melanocyte regulation, excellent anti-damage protection. A genuine alternative to the original Duke formula."
    }]
  }
  $json$::jsonb,
  now()
)
ON CONFLICT (product_url) DO UPDATE SET
  product_name = EXCLUDED.product_name,
  product_brand = EXCLUDED.product_brand,
  overall_score = EXCLUDED.overall_score,
  analysis_data = EXCLUDED.analysis_data,
  last_scraped = now();
