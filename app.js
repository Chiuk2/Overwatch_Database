var app = angular.module("myApp", ['chart.js'])
.controller("StatsController", function($scope, $http, $timeout){
  $scope.tab = 1;
  $scope.setTab = function(newTab){
      $scope.tab = newTab;
  };
  $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
  };
  $scope.search = "";
  $scope.stats = "init";
  $scope.modes = [
      "Recent Competitive","Quickplay"
  ];
  $scope.currentMode = $scope.modes[0];
  $scope.compare = [
      "Time Played", "Games Won", "Weapon Accuracy", "Eliminations Per Life", "Multikill - Best"
  ];
  $scope.Loading = "Loading...";
  $scope.currentCompare = $scope.compare[0];
  $scope.achievements = [
      "General","Offense", "Defense", "Tank", "Support", "Maps", "Special"
  ];
  $scope.currentAchievement = $scope.achievements[0];
  $scope.fillColor = ["#E6A61D"];
  $scope.nullChart = {
    "ana": 0,
    "bastion": 0,
    "doomfist": 0,
    "dva": 0,
    "genji": 0,
    "hanzo": 0,
    "junkrat": 0,
    "lucio": 0,
    "mccree": 0,
    "mei": 0,
    "mercy": 0,
    "orisa": 0,
    "pharah": 0,
    "reaper": 0,
    "reinhardt": 0,
    "roadhog": 0,
    "soldier76": 0,
    "sombra": 0,
    "symmetra": 0,
    "torbjorn": 0,
    "tracer": 0,
    "widowmaker": 0,
    "winston": 0,
    "zarya": 0,
    "zenyatta": 0
};

  function fetch(){
    $timeout(function(){
        $scope.Loading = "Battletag not found";
    }, 12000);
      $http.get("https://owapi.net/api/v3/u/" + $scope.user + "/blob")
      .then(function(response){
          $scope.stats = response.data;
          if($scope.stats.us.achievements!=null){
            if($scope.stats.us.achievements.general!=null){
                $scope.general = $scope.stats.us.achievements.general;     
                if($scope.general.blackjack == true){
                    $scope.blackjack = "assets/Achievement_Icons/General/blackjack.png";
                }else{
                    $scope.blackjack = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.centenary == true){
                    $scope.centenary = "assets/Achievement_Icons/General/centenary.png";
                }else{
                    $scope.centenary = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.decked_out == true){
                    $scope.decked_out = "assets/Achievement_Icons/General/decked_out.png";
                }else{
                    $scope.decked_out = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.decorated == true){
                    $scope.decorated = "assets/Achievement_Icons/General/decorated.png";
                }else{
                    $scope.decorated = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.level_10 == true){
                    $scope.level_10 = "assets/Achievement_Icons/General/level_10.png";
                }else{
                    $scope.level_10 = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.level_25 == true){
                    $scope.level_25 = "assets/Achievement_Icons/General/level_25.png";
                }else{
                    $scope.level_25 = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.level_50 == true){
                    $scope.level_50 = "assets/Achievement_Icons/General/level_50.png";
                }else{
                    $scope.level_50 = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.survival_expert == true){
                    $scope.survival_expert = "assets/Achievement_Icons/General/survival_expert.png";
                }else{
                    $scope.survival_expert = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.the_friend_zone == true){
                    $scope.the_friend_zone = "assets/Achievement_Icons/General/the_friend_zone.png";
                }else{
                    $scope.the_friend_zone = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.the_path_is_closed == true){
                    $scope.the_path_is_closed = "assets/Achievement_Icons/General/the_path_is_closed.png";
                }else{
                    $scope.the_path_is_closed = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.general.undying == true){
                    $scope.undying = "assets/Achievement_Icons/General/undying.png";
                }else{
                    $scope.undying = "assets/Achievement_Icons/unknown.png";
                }
                
            }
            if($scope.stats.us.achievements.offense!=null){
                $scope.offense = $scope.stats.us.achievements.offense;  
                if($scope.offense.air_strike == true){
                    $scope.air_strike = "assets/Achievement_Icons/Offense/air_strike.png";
                }else{
                    $scope.air_strike = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.offense.clearing_the_area == true){
                    $scope.clearing_the_area = "assets/Achievement_Icons/Offense/clearing_the_area.png";
                }else{
                    $scope.clearing_the_area = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.cratered == true){
                    $scope.cratered = "assets/Achievement_Icons/Offense/cratered.png";
                }else{
                    $scope.cratered = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.death_from_above == true){
                    $scope.death_from_above = "assets/Achievement_Icons/Offense/death_from_above.png";
                }else{
                    $scope.death_from_above = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.die_die_die_die == true){
                    $scope.die_die_die_die = "assets/Achievement_Icons/Offense/die_die_die_die.png";
                }else{
                    $scope.die_die_die_die = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.hack_the_planet == true){
                    $scope.hack_the_planet = "assets/Achievement_Icons/Offense/hack_the_planet.png";
                }else{
                    $scope.hack_the_planet = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.offense.its_high_noon == true){
                    $scope.its_high_noon = "assets/Achievement_Icons/Offense/its_high_noon.png";
                }else{
                    $scope.its_high_noon = "assets/Achievement_Icons/unknown.png";
                }   
                if($scope.offense.power_outage == true){
                    $scope.power_outage = "assets/Achievement_Icons/Offense/power_outage.png";
                }else{
                    $scope.power_outage = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.offense.rocket_man == true){
                    $scope.rocket_man = "assets/Achievement_Icons/Offense/rocket_man.png";
                }else{
                    $scope.rocket_man = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.slice_and_dice == true){
                    $scope.slice_and_dice = "assets/Achievement_Icons/Offense/slice_and_dice.png";
                }else{
                    $scope.slice_and_dice = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.offense.special_delivery == true){
                    $scope.special_delivery = "assets/Achievement_Icons/Offense/special_delivery.png";
                }else{
                    $scope.special_delivery = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.target_rich_environment == true){
                    $scope.target_rich_environment = "assets/Achievement_Icons/Offense/target_rich_environment.png";
                }else{
                    $scope.target_rich_environment = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.offense.their_own_worst_enemy == true){
                    $scope.their_own_worst_enemy = "assets/Achievement_Icons/Offense/their_own_worst_enemy.png";
                }else{
                    $scope.their_own_worst_enemy = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.offense.total_recall == true){
                    $scope.total_recall = "assets/Achievement_Icons/Offense/total_recall.png";
                }else{
                    $scope.total_recall = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.offense.waste_not_want_not == true){
                    $scope.waste_not_want_not = "assets/Achievement_Icons/Offense/waste_not_want_not.png";
                }else{
                    $scope.waste_not_want_not = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.offense.whoa_there == true){
                    $scope.whoa_there = "assets/Achievement_Icons/Offense/whoa_there.png";
                }else{
                    $scope.whoa_there = "assets/Achievement_Icons/unknown.png";
                }                          
            }
            if($scope.stats.us.achievements.defense!=null){
                $scope.defense = $scope.stats.us.achievements.defense;  
                if($scope.defense.armor_up == true){
                    $scope.armor_up = "assets/Achievement_Icons/Defense/armor_up.png";
                }else{
                    $scope.armor_up = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.defense.charge == true){
                    $scope.charge = "assets/Achievement_Icons/Defense/charge.png";
                }else{
                    $scope.charge = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.cold_snap == true){
                    $scope.cold_snap = "assets/Achievement_Icons/Defense/cold_snap.png";
                }else{
                    $scope.cold_snap = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.did_that_sting == true){
                    $scope.did_that_sting = "assets/Achievement_Icons/Defense/did_that_sting.png";
                }else{
                    $scope.did_that_sting = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.ice_blocked == true){
                    $scope.ice_blocked = "assets/Achievement_Icons/Defense/ice_blocked.png";
                }else{
                    $scope.ice_blocked = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.mine_like_a_steel_trap == true){
                    $scope.mine_like_a_steel_trap = "assets/Achievement_Icons/Defense/mine_like_a_steel_trap.png";
                }else{
                    $scope.mine_like_a_steel_trap = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.defense.raid_wipe == true){
                    $scope.raid_wipe = "assets/Achievement_Icons/Defense/raid_wipe.png";
                }else{
                    $scope.raid_wipe = "assets/Achievement_Icons/unknown.png";
                }   
                if($scope.defense.roadkill == true){
                    $scope.roadkill = "assets/Achievement_Icons/Defense/roadkill.png";
                }else{
                    $scope.roadkill = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.defense.simple_geometry == true){
                    $scope.simple_geometry = "assets/Achievement_Icons/Defense/simple_geometry.png";
                }else{
                    $scope.simple_geometry = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.smooth_as_silk == true){
                    $scope.smooth_as_silk = "assets/Achievement_Icons/Defense/smooth_as_silk.png";
                }else{
                    $scope.smooth_as_silk = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.defense.the_dragon_is_sated == true){
                    $scope.the_dragon_is_sated = "assets/Achievement_Icons/Defense/the_dragon_is_sated.png";
                }else{
                    $scope.the_dragon_is_sated = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.defense.triple_threat == true){
                    $scope.triple_threat = "assets/Achievement_Icons/Defense/triple_threat.png";
                }else{
                    $scope.triple_threat = "assets/Achievement_Icons/unknown.png";
                }                       
            }
            if($scope.stats.us.achievements.tank!=null){
                $scope.tank = $scope.stats.us.achievements.tank;  
                if($scope.tank.anger_management == true){
                    $scope.anger_management = "assets/Achievement_Icons/Tank/anger_management.png";
                }else{
                    $scope.anger_management = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.tank.game_over == true){
                    $scope.game_over = "assets/Achievement_Icons/Tank/game_over.png";
                }else{
                    $scope.game_over = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.giving_you_the_hook == true){
                    $scope.giving_you_the_hook = "assets/Achievement_Icons/Tank/giving_you_the_hook.png";
                }else{
                    $scope.giving_you_the_hook = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.halt_state == true){
                    $scope.halt_state = "assets/Achievement_Icons/Tank/halt_state.png";
                }else{
                    $scope.halt_state = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.hog_wild == true){
                    $scope.hog_wild = "assets/Achievement_Icons/Tank/hog_wild.png";
                }else{
                    $scope.hog_wild = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.i_am_your_shield == true){
                    $scope.i_am_your_shield = "assets/Achievement_Icons/Tank/i_am_your_shield.png";
                }else{
                    $scope.i_am_your_shield = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.tank.mine_sweeper == true){
                    $scope.mine_sweeper = "assets/Achievement_Icons/Tank/mine_sweeper.png";
                }else{
                    $scope.mine_sweeper = "assets/Achievement_Icons/unknown.png";
                }   
                if($scope.tank.overclocked == true){
                    $scope.overclocked = "assets/Achievement_Icons/Tank/overclocked.png";
                }else{
                    $scope.overclocked = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.tank.power_overwhelming == true){
                    $scope.power_overwhelming = "assets/Achievement_Icons/Tank/power_overwhelming.png";
                }else{
                    $scope.power_overwhelming = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.shot_down == true){
                    $scope.shot_down = "assets/Achievement_Icons/Tank/shot_down.png";
                }else{
                    $scope.shot_down = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.tank.storm_earth_and_fire == true){
                    $scope.storm_earth_and_fire = "assets/Achievement_Icons/Tank/storm_earth_and_fire.png";
                }else{
                    $scope.storm_earth_and_fire = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.tank.the_power_of_attraction == true){
                    $scope.the_power_of_attraction = "assets/Achievement_Icons/Tank/the_power_of_attraction.png";
                }else{
                    $scope.the_power_of_attraction = "assets/Achievement_Icons/unknown.png";
                }                       
            }
            if($scope.stats.us.achievements.support!=null){
                $scope.support = $scope.stats.us.achievements.support;  
                if($scope.support.enabler == true){
                    $scope.enabler = "assets/Achievement_Icons/Support/enabler.png";
                }else{
                    $scope.enabler = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.support.group_health_plan == true){
                    $scope.group_health_plan = "assets/Achievement_Icons/Support/group_health_plan.png";
                }else{
                    $scope.group_health_plan = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.support.huge_rez == true){
                    $scope.huge_rez = "assets/Achievement_Icons/Support/huge_rez.png";
                }else{
                    $scope.huge_rez = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.support.huge_success == true){
                    $scope.huge_success = "assets/Achievement_Icons/Support/huge_success.png";
                }else{
                    $scope.huge_success = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.support.naptime == true){
                    $scope.naptime = "assets/Achievement_Icons/Support/naptime.png";
                }else{
                    $scope.naptime = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.support.rapid_discord == true){
                    $scope.rapid_discord = "assets/Achievement_Icons/Support/rapid_discord.png";
                }else{
                    $scope.rapid_discord = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.support.supersonic == true){
                    $scope.supersonic = "assets/Achievement_Icons/Support/supersonic.png";
                }else{
                    $scope.supersonic = "assets/Achievement_Icons/unknown.png";
                }   
                if($scope.support.the_car_wash == true){
                    $scope.the_car_wash = "assets/Achievement_Icons/Support/the_car_wash.png";
                }else{
                    $scope.the_car_wash = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.support.the_floor_is_lava == true){
                    $scope.the_floor_is_lava = "assets/Achievement_Icons/Support/the_floor_is_lava.png";
                }else{
                    $scope.the_floor_is_lava = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.support.the_iris_embraces_you == true){
                    $scope.the_iris_embraces_you = "assets/Achievement_Icons/Support/the_iris_embraces_you.png";
                }else{
                    $scope.the_iris_embraces_you = "assets/Achievement_Icons/unknown.png";
                }                    
            }
            if($scope.stats.us.achievements.maps!=null){
                $scope.maps = $scope.stats.us.achievements.maps;  
                if($scope.maps.cant_touch_this == true){
                    $scope.cant_touch_this = "assets/Achievement_Icons/Maps/cant_touch_this.png";
                }else{
                    $scope.cant_touch_this = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.maps.double_cap == true){
                    $scope.double_cap = "assets/Achievement_Icons/Maps/double_cap.png";
                }else{
                    $scope.double_cap = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.maps.escort_duty == true){
                    $scope.escort_duty = "assets/Achievement_Icons/Maps/escort_duty.png";
                }else{
                    $scope.escort_duty = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.maps.lockdown == true){
                    $scope.lockdown = "assets/Achievement_Icons/Maps/lockdown.png";
                }else{
                    $scope.lockdown = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.maps.shutout == true){
                    $scope.shutout = "assets/Achievement_Icons/Maps/shutout.png";
                }else{
                    $scope.shutout = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.maps.world_traveler == true){
                    $scope.world_traveler = "assets/Achievement_Icons/Maps/world_traveler.png";
                }else{
                    $scope.world_traveler = "assets/Achievement_Icons/unknown.png";
                }                    
            }
            if($scope.stats.us.achievements.special!=null){
                $scope.special = $scope.stats.us.achievements.special;  
                if($scope.special.ambush == true){
                    $scope.ambush = "assets/Achievement_Icons/Special/ambush.png";
                }else{
                    $scope.ambush = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.special.cleanup_duty == true){
                    $scope.cleanup_duty = "assets/Achievement_Icons/Special/cleanup_duty.png";
                }else{
                    $scope.cleanup_duty = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.cool_as_ice == true){
                    $scope.cool_as_ice = "assets/Achievement_Icons/Special/cool_as_ice.png";
                }else{
                    $scope.cool_as_ice = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.distinguished_service == true){
                    $scope.distinguished_service = "assets/Achievement_Icons/Special/distinguished_service.png";
                }else{
                    $scope.distinguished_service = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.flagbearer == true){
                    $scope.flagbearer = "assets/Achievement_Icons/Special/flagbearer.png";
                }else{
                    $scope.flagbearer = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.four_they_were == true){
                    $scope.four_they_were = "assets/Achievement_Icons/Special/four_they_were.png";
                }else{
                    $scope.four_they_were = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.special.handle_with_care == true){
                    $scope.handle_with_care = "assets/Achievement_Icons/Special/handle_with_care.png";
                }else{
                    $scope.handle_with_care = "assets/Achievement_Icons/unknown.png";
                }   
                if($scope.special.held_the_door == true){
                    $scope.held_the_door = "assets/Achievement_Icons/Special/held_the_door.png";
                }else{
                    $scope.held_the_door = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.special.lucio_hat_trick == true){
                    $scope.lucio_hat_trick = "assets/Achievement_Icons/Special/lucio_hat_trick.png";
                }else{
                    $scope.lucio_hat_trick = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.mission_complete == true){
                    $scope.mission_complete = "assets/Achievement_Icons/Special/mission_complete.png";
                }else{
                    $scope.mission_complete = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.special.not_a_scratch == true){
                    $scope.not_a_scratch = "assets/Achievement_Icons/Special/not_a_scratch.png";
                }else{
                    $scope.not_a_scratch = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.replacements == true){
                    $scope.replacements = "assets/Achievement_Icons/Special/replacements.png";
                }else{
                    $scope.replacements = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.special.safe_hands == true){
                    $scope.safe_hands = "assets/Achievement_Icons/Special/safe_hands.png";
                }else{
                    $scope.safe_hands = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.special.snowed_in == true){
                    $scope.snowed_in = "assets/Achievement_Icons/Special/snowed_in.png";
                }else{
                    $scope.snowed_in = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.special.strike_team == true){
                    $scope.strike_team = "assets/Achievement_Icons/Special/strike_team.png";
                }else{
                    $scope.strike_team = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.survived_the_night == true){
                    $scope.survived_the_night = "assets/Achievement_Icons/Special/survived_the_night.png";
                }else{
                    $scope.survived_the_night = "assets/Achievement_Icons/unknown.png";
                }  
                if($scope.special.unit_commendation == true){
                    $scope.unit_commendation = "assets/Achievement_Icons/Special/unit_commendation.png";
                }else{
                    $scope.unit_commendation = "assets/Achievement_Icons/unknown.png";
                } 
                if($scope.special.volley == true){
                    $scope.volley = "assets/Achievement_Icons/Special/volley.png";
                }else{
                    $scope.volley = "assets/Achievement_Icons/unknown.png";
                }
                if($scope.special.whap == true){
                    $scope.whap = "assets/Achievement_Icons/Special/whap.png";
                }else{
                    $scope.whap = "assets/Achievement_Icons/unknown.png";
                }    
                                      
            }
        }
          if($scope.stats.us.stats.quickplay.overall_stats.avatar!=null){
            $scope.icon = $scope.stats.us.stats.quickplay.overall_stats.avatar;
          }
          if($scope.stats.us.stats.quickplay.overall_stats.level!=null && 
            $scope.stats.us.stats.quickplay.overall_stats.prestige!=null){
            $scope.level = (Number($scope.stats.us.stats.quickplay.overall_stats.level)+
            (Number($scope.stats.us.stats.quickplay.overall_stats.prestige) * 100));
          }
          if($scope.stats.us.stats.competitive!=null){
            if($scope.stats.us.stats.competitive.overall_stats.comprank!=null){
                $scope.rank =$scope.stats.us.stats.competitive.overall_stats.comprank;
            }else{
                $scope.rank = null;
            }
            if($scope.stats.us.stats.competitive.overall_stats.tier!=null){
                $scope.rankIcon = "assets/Rank_Icons/"+ $scope.stats.us.stats.competitive.overall_stats.tier + ".png";
            }else{
                $scope.rankIcon = null;
            }
          }else{
              $scope.rank = null;
              $scope.rankIcon = null;
          }
          if($scope.stats.us.stats.competitive!=null){
                if($scope.stats.us.stats.competitive.game_stats.objective_time_most_in_game!=null){
                    var time = $scope.stats.us.stats.competitive.game_stats.objective_time_most_in_game;
                    var min = Number(time) * 60;
                    var sec = (min - Math.floor(min) ) * 60
                
                    $scope.compMin = Math.floor(min);
                    $scope.compSec = Math.round(sec);
                    $scope.sec = $scope.compSec;     
                    $scope.min = $scope.compMin;       
                }else{
                        $scope.compSec = 0;
                        $scope.compMin = 0;
                        $scope.sec = $scope.compSec;     
                        $scope.min = $scope.compMin; 
                }

                if($scope.stats.us.stats.competitive.game_stats.time_spent_on_fire_most_in_game!=null){
                    var time = $scope.stats.us.stats.competitive.game_stats.time_spent_on_fire_most_in_game;
                    var min = Number(time) * 60;
                    var sec = (min - Math.floor(min) ) * 60
                
                    $scope.compMinF = Math.floor(min);
                    $scope.compSecF = Math.round(sec);   
                    $scope.secF = $scope.compSecF;
                    $scope.minF = $scope.compMinF;  
                }else{
                    $scope.compSecF = 0;
                    $scope.compMinF = 0;
                    $scope.secF = $scope.compSecF;
                    $scope.minF = $scope.compMinF;  
                }
                
                if($scope.stats.us.stats.competitive.game_stats.eliminations_most_in_game!=null){
                    $scope.compElims = $scope.stats.us.stats.competitive.game_stats.eliminations_most_in_game;
                    $scope.elims = $scope.compElims;
                }else{
                    $scope.compElims = 0;
                    $scope.elims = $scope.compElims;
                }
                if($scope.stats.us.stats.competitive.game_stats.final_blows_most_in_game!=null){
                    $scope.compFinBlows = $scope.stats.us.stats.competitive.game_stats.final_blows_most_in_game;
                    $scope.finBlows = $scope.compFinBlows;
                }else{
                    $scope.compFinBlows = 0;
                    $scope.finBlows = $scope.compFinBlows;
                }
                if($scope.stats.us.stats.competitive.game_stats.objective_kills_most_in_game!=null){
                    $scope.compObjKills = $scope.stats.us.stats.competitive.game_stats.objective_kills_most_in_game;
                    $scope.objKills = $scope.compObjKills;
                }else{
                    $scope.compObjKills = 0;
                    $scope.objKills = $scope.compObjKills;
                }
                if($scope.stats.us.stats.competitive.game_stats.hero_damage_done_most_in_game!=null){
                    $scope.compDamDone = $scope.stats.us.stats.competitive.game_stats.hero_damage_done_most_in_game;
                    $scope.damDone = $scope.compDamDone;
                }else{
                    $scope.compDamDone = 0;
                    $scope.damDone = $scope.compDamDone;
                }
                if($scope.stats.us.stats.competitive.game_stats.healing_done_most_in_game){
                    $scope.compHealDone = $scope.stats.us.stats.competitive.game_stats.healing_done_most_in_game;
                    $scope.healDone = $scope.compHealDone;
                }else{
                    $scope.compHealDone = 0;
                    $scope.healDone = $scope.compHealDone;
                }
                if($scope.stats.us.stats.competitive.game_stats.solo_kills_most_in_game!=null){
                    $scope.compSoloKills = $scope.stats.us.stats.competitive.game_stats.solo_kills_most_in_game;
                    $scope.soloKills = $scope.compSoloKills;
                }else{
                    $scope.compSoloKills = 0;
                    $scope.soloKills = $scope.compSoloKills;
                }
                if($scope.stats.us.heroes.playtime.competitive!=null){
                    var obj = $scope.stats.us.heroes.playtime.competitive;
                    $scope.compChart = getData(obj);
                    var data = $scope.compChart
                    barGraph(data);
                }
            }else{
                $scope.elims = 0;
                $scope.finBlows = 0; 
                $scope.objKills = 0;
                $scope.damDone = 0;
                $scope.healDone = 0;
                $scope.soloKills = 0;
                $scope.min = 0;
                $scope.sec = 0;
                $scope.minF = 0; 
                $scope.secF = 0;
                $scope.compElims = 0;
                $scope.compFinBlows = 0; 
                $scope.compObjKills = 0;
                $scope.compDamDone = 0;
                $scope.compHealDone = 0;
                $scope.compSoloKills = 0;
                $scope.compMin = 0;
                $scope.compSec = 0;
                $scope.compMinF = 0;
                $scope.compSecF = 0;
               var obj = $scope.nullChart;
                $scope.compChart = getData(obj);
                var data = $scope.compChart;
                barGraph(data);
                $scope.compGWChart = getData(obj);
                $scope.compWAChart = getData(obj);
                $scope.compEPLChart = getData(obj);
                $scope.compMKChart = getData(obj);
            }
            if($scope.stats.us.stats.quickplay!=null){
                if($scope.stats.us.stats.quickplay.game_stats.objective_time_most_in_game!=null){
                    var time = $scope.stats.us.stats.quickplay.game_stats.objective_time_most_in_game;
                    var min = Number(time) * 60;
                    var sec = (min - Math.floor(min) ) * 60
                
                    $scope.qpMin = Math.floor(min);
                    $scope.qpSec = Math.round(sec);  
                    $scope.min = $scope.qpMin;
                    $scope.sec = $scope.qpSec;   
                }
                
                if($scope.stats.us.stats.quickplay.game_stats.time_spent_on_fire_most_in_game!=null){
                    var time = $scope.stats.us.stats.quickplay.game_stats.time_spent_on_fire_most_in_game;
                    var min = Number(time) * 60;
                    var sec = (min - Math.floor(min) ) * 60
                
                    $scope.qpMinF = Math.floor(min);
                    $scope.qpSecF = Math.round(sec);
                    $scope.minF = $scope.qpMinF;
                    $scope.sec = $scope.qpSecF;     
                }
                if($scope.stats.us.stats.quickplay.game_stats.eliminations_most_in_game!=null){
                    $scope.qpElims = $scope.stats.us.stats.quickplay.game_stats.eliminations_most_in_game;
                }else{
                    $scope.qpElims = 0;
                }
                if($scope.stats.us.stats.quickplay.game_stats.final_blows_most_in_game!=null){
                    $scope.qpFinBlows = $scope.stats.us.stats.quickplay.game_stats.final_blows_most_in_game;
                }else{
                    $scope.qpFinBlows = 0;
                }
                if($scope.stats.us.stats.quickplay.game_stats.objective_kills_most_in_game!=null){
                    $scope.qpObjKills = $scope.stats.us.stats.quickplay.game_stats.objective_kills_most_in_game;
                }else{
                    $scope.qpObjKills = 0;
                }
                if($scope.stats.us.stats.quickplay.game_stats.hero_damage_done_most_in_game!=null){
                    $scope.qpDamDone = $scope.stats.us.stats.quickplay.game_stats.hero_damage_done_most_in_game;
                }else{
                    $scope.qpDamDone = 0;
                }
                if($scope.stats.us.stats.quickplay.game_stats.healing_done_most_in_game){
                    $scope.qpHealDone = $scope.stats.us.stats.quickplay.game_stats.healing_done_most_in_game;
                }else{
                    $scope.qpHealDone = 0;
                }
                if($scope.stats.us.stats.quickplay.game_stats.solo_kills_most_in_game!=null){
                    $scope.qpSoloKills = $scope.stats.us.stats.quickplay.game_stats.solo_kills_most_in_game;
                }else{
                    $scope.qpSoloKills = 0;
                }
                if($scope.stats.us.heroes.playtime.quickplay!=null){
                    var object = $scope.stats.us.heroes.playtime.quickplay;
                    $scope.qpChart = getData(object);    
                }
                if($scope.stats.us.heroes.stats.competitive!=null){
                    var object = $scope.stats.us.heroes.stats.competitive;
                    var graphType = "Games Won";
                    $scope.compGWChart = getOtherGraphData(object, graphType);
                    graphType = "Weapon Accuracy";
                    $scope.compWAChart = getOtherGraphData(object, graphType);
                    graphType = "Eliminations Per Life";
                    $scope.compEPLChart = getOtherGraphData(object, graphType);
                    graphType = "Multikill - Best";
                    $scope.compMKChart = getOtherGraphData(object, graphType);
                }else{
                    var obj = $scope.nullChart;
                    $scope.compGWChart = getData(obj);
                    $scope.compWAChart = getData(obj);
                    $scope.compEPLChart = getData(obj);
                    $scope.compMKChart = getData(obj);
                }
                if($scope.stats.us.heroes.stats.quickplay!=null){
                    var object = $scope.stats.us.heroes.stats.quickplay;
                    var graphType = "Games Won";
                    $scope.qpGWChart = getOtherGraphData(object, graphType);
                    graphType = "Weapon Accuracy";
                    $scope.qpWAChart = getOtherGraphData(object, graphType);
                    graphType = "Eliminations Per Life";
                    $scope.qpEPLChart = getOtherGraphData(object, graphType);
                    graphType = "Multikill - Best";
                    $scope.qpMKChart = getOtherGraphData(object, graphType);
                }
               
            }else{
                $scope.elims = 0;
                $scope.finBlows = 0; 
                $scope.objKills = 0;
                $scope.damDone = 0;
                $scope.healDone = 0;
                $scope.soloKills = 0;
                $scope.min = 0;
                $scope.sec = 0;
                $scope.minF = 0; 
                $scope.secF = 0;
                $scope.qpElims = 0;
                $scope.qpFinBlows = 0; 
                $scope.qpObjKills = 0;
                $scope.qpDamDone = 0;
                $scope.qpHealDone = 0;
                $scope.qpSoloKills = 0;
                $scope.qpMin = 0;
                $scope.qpSec = 0;
                $scope.qpMinF = 0;
                $scope.qpSecF = 0;
               var obj = $scope.nullChart;
                $scope.qpChart = getData(obj);
                $scope.qpWAChart = getData(obj);
                $scope.qpGWChart = getData(obj);
                $scope.qpEPLChart = getData(obj);
                $scope.qpMKChart = getData(obj);
            }
            
      });
  }

 function getData(obj){
    var data = [];
    for (var key in obj){
        var nObj = {};
        nObj["name"] = key;
        nObj["value"] = obj[key];
        data.push(nObj);
    }
    return data;
  }

  function getOtherGraphData(obj, graph){
      var data = [];
      for (var key in obj){
          var nObj = {};
          nObj["name"] = key;
        if(graph == "Games Won"){
            if(obj[key].general_stats.games_won != null){
            nObj["value"] = obj[key].general_stats.games_won;
            }else{
                nObj["value"] = 0;
            }
        }else if(graph == "Weapon Accuracy"){
            if(obj[key].general_stats.weapon_accuracy != null){
                nObj["value"] = (obj[key].general_stats.weapon_accuracy)*100;
                }else{
                    nObj["value"] = 0;
                }
        }else if(graph == "Eliminations Per Life"){
            if(obj[key].general_stats.eliminations_per_life != null){
                nObj["value"] = obj[key].general_stats.eliminations_per_life;
                }else{
                    nObj["value"] = 0;
                }
        }else if(graph == "Multikill - Best"){
            if(obj[key].general_stats.multikill_best != null){
                nObj["value"] = obj[key].general_stats.multikill_best;
                }else{
                    nObj["value"] = 0;
                }
        }
          data.push(nObj);
      }
      return data;
  }

  function barGraph(data){

        //sort bars based on value
        data = data.sort(function (a, b) {
            return (b.value - a.value);
        });

        $scope.TopHero = "assets/Hero_Symbols/" + data[0].name + ".png"; 

        var heroes = data.map(function(d){return d.name});
        var hrs = data.map(function(d){return d.value});
        $scope.heroes = heroes;
        $scope.hrs = [hrs];
        $scope.series = ["time played"]
    
    }

  $scope.update = function(){
      $scope.Loading = "Loading...";
      var oldUser = $scope.search;
      $scope.stats = null;
      var battletag = $scope.search.split("#");
      $scope.username = battletag[0];
      $scope.usernum = battletag[1];
      $scope.user = oldUser.replace("#","-");
      fetch();
  };

 $scope.changeGraph = function(checkMode, checkCompare){
    if(checkMode == "Recent Competitive"){
        if(checkCompare == "Time Played"){
            var data = $scope.compChart;
        }else if(checkCompare == "Games Won"){
            var data = $scope.compGWChart;  
        }else if(checkCompare == "Weapon Accuracy"){
            var data = $scope.compWAChart;
        }else if(checkCompare == "Eliminations Per Life"){
            var data = $scope.compEPLChart;
        }else if(checkCompare == "Multikill - Best"){
            var data = $scope.compMKChart;
        }
        barGraph(data);
        $scope.elims = $scope.compElims;
        $scope.finBlows = $scope.compFinBlows; 
        $scope.objKills = $scope.compObjKills;
        $scope.damDone = $scope.compDamDone;
        $scope.healDone = $scope.compHealDone;
        $scope.soloKills = $scope.compSoloKills;
        $scope.sec = $scope.compSec;
        $scope.min = $scope.compMin;
        $scope.minF = $scope.compMinF;
        $scope.secF = $scope.compSecF;
    }
    if(checkMode == "Quickplay"){
        if(checkCompare == "Time Played"){
            var data = $scope.qpChart;
        }else if(checkCompare == "Games Won"){
            var data = $scope.qpGWChart;  
        }else if(checkCompare == "Weapon Accuracy"){
            var data = $scope.qpWAChart;  
        }else if(checkCompare == "Eliminations Per Life"){
            var data = $scope.qpEPLChart;  
        }else if(checkCompare == "Multikill - Best"){
            var data = $scope.qpMKChart;  
        }
        barGraph(data);
        $scope.elims = $scope.qpElims;
        $scope.finBlows = $scope.qpFinBlows; 
        $scope.objKills = $scope.qpObjKills;
        $scope.damDone = $scope.qpDamDone;
        $scope.healDone = $scope.qpHealDone;
        $scope.soloKills = $scope.qpSoloKills;
        $scope.sec = $scope.qpSec;
        $scope.min = $scope.qpMin;
        $scope.minF = $scope.qpMinF;
        $scope.secF = $scope.qpSecF;
    }
  };

  $scope.compareGraph = function(checkMode, checkCompare){
    if(checkMode == "Recent Competitive" && checkCompare == "Time Played"){
        var data = $scope.compChart;
        barGraph(data);
    }
    if(checkMode == "Quickplay" && checkCompare == "Time Played"){
        var data = $scope.qpChart;
        barGraph(data); 
    }
    if(checkMode == "Recent Competitive" && checkCompare == "Games Won"){
        var data = $scope.compGWChart;
        barGraph(data); 
    }
    if(checkMode == "Quickplay" && checkCompare == "Games Won"){
        var data = $scope.qpGWChart;
        barGraph(data); 
    }
    if(checkMode == "Recent Competitive" && checkCompare == "Weapon Accuracy"){
        var data = $scope.compWAChart;
        barGraph(data); 
    }
    if(checkMode == "Quickplay" && checkCompare == "Weapon Accuracy"){
        var data = $scope.qpWAChart;
        barGraph(data); 
    }
    if(checkMode == "Recent Competitive" && checkCompare == "Eliminations Per Life"){
        var data = $scope.compEPLChart;
        barGraph(data); 
    }
    if(checkMode == "Quickplay" && checkCompare == "Eliminations Per Life"){
        var data = $scope.qpEPLChart;
        barGraph(data); 
    }
    if(checkMode == "Recent Competitive" && checkCompare == "Multikill - Best"){
        var data = $scope.compMKChart;
        barGraph(data); 
    }
    if(checkMode == "Quickplay" && checkCompare == "Multikill - Best"){
        var data = $scope.qpMKChart;
        barGraph(data); 
    }
  };

  $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
  }


   
});

