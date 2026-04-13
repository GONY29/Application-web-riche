include("Scheduling.jl")
# -----------------------------
# Read functions
# -----------------------------
prb = 
# processing times of jobs
prb.p = 
# due dates
prb.d = 
# number of jobs and machines
prb.nj, prb.nm = 
prb
# generates start and complete times from order considering a permutation schedule
function assignOrder!(prb::SchedulingProblem, order::Vector{Int})
    # initialize start times and complete times of each task
    prb.s = zeros(prb.nj)
    prb.c = zeros(prb.nj)
    # initialize lateness and tardiness
    if prb.d !== nothing
        prb.l = zeros(prb.nj)
        prb.t = zeros(prb.nj)
    end
    # initialize availability of the machine to 0
    t = 0
    # go through the order of tasks
    for i in order
        # assign the start time of task i as the availability time of the machine or as its release date, whichever comes last
        if prb.r !== nothing
            prb.s[i] = max(t,prb.r[i])
        else
            prb.s[i] = t
        end
        # assign the complete time of task i by adding the processing time to its start time
        prb.c[i] = prb.s[i] + prb.p[i]
        # compute lateness and tardiness
        if prb.d !== nothing
            prb.l[i] = prb.c[i] - prb.d[i]
            prb.t[i] = max(0,prb.l[i])
        end
        # update the availability of the machine so that the next task starts after the current one finishes
        t = prb.c[i]
    end
end